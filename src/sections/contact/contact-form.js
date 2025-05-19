import { m } from 'framer-motion';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import * as Yup from 'yup';

import FormProvider, {
  RHFTextField,
} from 'src/components/hook-form';
import LoadingButton from '@mui/lab/LoadingButton';
import axios from '../../utils/axios';
import Button from '@mui/material/Button';
import { useSnackbar } from '../../components/snackbar';

// ----------------------------------------------------------------------
export const FormSchema = Yup.object().shape({
  name: Yup.string()
    .required('Nome è un campo obbligatorio'),
  email: Yup.string().required('Email è un campo obbligatorio').email('Email deve essere un indirizzo valido'),
  phone: Yup.string().required('Telefono è un campo obbligatorio'),
  subject: Yup.string().required('Oggetto è un campo obbligatorio'),
  message: Yup.string().required('Messaggio è un campo obbligatorio'),
});

export const defaultValues = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

export default function ContactForm({ labels, title }) {
  const { enqueueSnackbar } = useSnackbar();

  const methods = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_HOST+'/api/send-email', data);
      reset();
      enqueueSnackbar(response.data, {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar(error, {
        variant: 'error',
      })
    }
  });


  return (
    <>
      {isSubmitting && (
        <Backdrop open sx={{ zIndex: (theme) => theme.zIndex.modal + 1 }}>
          <CircularProgress color="primary" />
        </Backdrop>
      )}

      {labels && (
        <FormProvider methods={methods} onSubmit={onSubmit}>
          <Stack component={MotionViewport} spacing={5}>
            <m.div variants={varFade().inUp}>
              <Typography variant="h3">{title}</Typography>
            </m.div>
            <Stack spacing={3}>
              <m.div variants={varFade().inUp}>
                <RHFTextField fullWidth name="name" label={labels.name} />
              </m.div>

              <m.div variants={varFade().inUp}>
                <RHFTextField fullWidth name="email" label={labels.email} />
              </m.div>

              <m.div variants={varFade().inUp}>
                <RHFTextField fullWidth name="phone" label={labels.phone} />
              </m.div>

              <m.div variants={varFade().inUp}>
                <RHFTextField fullWidth name="subject" label={labels.subject} />
              </m.div>

              <m.div variants={varFade().inUp}>
                <RHFTextField fullWidth name="message" label={labels.message} multiline rows={4} />
              </m.div>
            </Stack>

            <m.div variants={varFade().inUp}>
              <LoadingButton
                fullWidth
                color="alert"
                size="large"
                type="submit"
                variant="soft"
                loading={isSubmitting}
                sx={{ bgcolor: 'rgb(246,142,59)', color: 'common.white', width: '100%' }}
              >
                {labels.submit}
              </LoadingButton>
            </m.div>
          </Stack>
        </FormProvider>
      )}
    </>
  );
}
