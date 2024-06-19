// CreateForm.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { FormControl, FormLabel, FormItem, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const createCategorySchema = z.object({
  name: z.string().min(1, "Name is required"),
});

type CreateCategoryFormValues = z.infer<typeof createCategorySchema>;

interface CreateFormProps {
  onSave: (category: { name: string }) => void;
  onCancel: () => void;
}

const CreateForm: React.FC<CreateFormProps> = ({ onSave, onCancel }) => {
  const methods = useForm<CreateCategoryFormValues>({
    resolver: zodResolver(createCategorySchema),
  });

  const { handleSubmit, reset } = methods;

  const onSubmit: SubmitHandler<CreateCategoryFormValues> = (data) => {
    onSave(data);
    reset();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-8 rounded-md shadow-lg w-11/12 sm:w-3/4 lg:w-1/3">
        <h2 className="text-2xl mb-6 font-bold text-center text-indigo-600">Create Category</h2>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormItem>
              <FormLabel htmlFor="name" className="text-lg text-gray-700">Name</FormLabel>
              <FormControl>
                <input id="name" {...methods.register("name")} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </FormControl>
              <FormMessage>{methods.formState.errors.name?.message}</FormMessage>
            </FormItem>
            <div className="flex justify-end space-x-4">
              <Button type="button" variant="secondary" onClick={onCancel} className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500">Cancel</Button>
              <Button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Create</Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default CreateForm;