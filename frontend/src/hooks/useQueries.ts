import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export interface ContactFormData {
  childsName: string;
  parentsName: string;
  phoneNumber: string;
  childsAge: number;
  message: string;
}

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (!actor) throw new Error('Backend not available');
      await actor.submitContactForm(
        data.childsName,
        data.parentsName,
        data.phoneNumber,
        BigInt(data.childsAge),
        data.message
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['submissions'] });
    },
  });
}
