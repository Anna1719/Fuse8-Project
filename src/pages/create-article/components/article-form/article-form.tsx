/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  articleFormSchema,
  ArticleFormValues,
} from '@/shared/schemas/article-form-schema';
import { ButtonWithIcon } from '@/shared/ui';
import styles from './article-form.module.scss';

type ArticleFormProps = {
  onSubmit: (values: ArticleFormValues) => void;
  isSubmitting?: boolean;
};

export const ArticleForm = ({ onSubmit, isSubmitting }: ArticleFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<ArticleFormValues>({
    resolver: zodResolver(articleFormSchema),
    defaultValues: {
      title: '',
      content: {
        type: 'draft',
      },
    },
  });

  const contentType = watch('content.type');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <label>Title</label>
        <input
          type="text"
          {...register('title')}
          aria-invalid={!!errors.title}
        />
        {errors.title?.message && (
          <p className={styles.error}>{errors.title.message}</p>
        )}
      </div>

      <div>
        <label>Type</label>
        <select
          {...register('content.type')}
          onChange={(e) =>
            setValue('content.type', e.target.value as 'draft' | 'published')
          }
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </div>

      {contentType === 'published' && (
        <>
          <div>
            <label>Description</label>
            <textarea
              {...register('content.description' as const)}
              aria-invalid={!!(errors.content as any)?.description}
            />
            {(errors.content as any)?.description?.message && (
              <p className={styles.error}>
                {(errors.content as any).description.message}
              </p>
            )}
          </div>

          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              id="isNew"
              {...register('content.isNew')}
              onChange={(e) => setValue('content.isNew', e.target.checked)}
            />
            <label htmlFor="isNew">Mark as new</label>
          </div>
        </>
      )}

      <ButtonWithIcon
        type="submit"
        disabled={isSubmitting}
        className={styles.submitButton}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </ButtonWithIcon>
    </form>
  );
};
