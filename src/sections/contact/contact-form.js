import { m } from 'framer-motion';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import useCompanyColors from 'src/hooks/use-company-colors';

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
  const companyColors = useCompanyColors();

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

  // Aggiunta delle label mancanti
  const updatedLabels = {
    name: labels?.name || 'Nome',
    email: labels?.email || 'Email',
    phone: labels?.phone || 'Telefono',
    subject: labels?.subject || 'Oggetto',
    message: labels?.message || 'Messaggio',
    submit: labels?.submit || 'Invia',
  };

  return (
    <>
      {isSubmitting && (
        <Backdrop open sx={{ zIndex: (theme) => theme.zIndex.modal + 1 }}>
          <CircularProgress color="primary" />
        </Backdrop>
      )}

      {labels && (
        <FormProvider methods={methods} onSubmit={onSubmit}>
          <Stack component={MotionViewport} spacing={10}>
            <m.div variants={varFade().inUp}>
              <Typography variant="h3">{title}</Typography>
            </m.div>
            <Stack spacing={3}>
              <m.div variants={varFade().inUp}>
                <RHFTextField fullWidth name="name" label={updatedLabels.name} />
              </m.div>

              <m.div variants={varFade().inUp}>
                <RHFTextField fullWidth name="email" label={updatedLabels.email} />
              </m.div>

              <m.div variants={varFade().inUp}>
                <RHFTextField fullWidth name="phone" label={updatedLabels.phone} />
              </m.div>

              <m.div variants={varFade().inUp}>
                <RHFTextField fullWidth name="subject" label={updatedLabels.subject} />
              </m.div>

              <m.div variants={varFade().inUp}>
                <RHFTextField fullWidth name="message" label={updatedLabels.message} multiline rows={4} />
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
                sx={{ bgcolor: 'company.main', color: 'common.white', width: '100%' }}
              >
                {updatedLabels.submit}
              </LoadingButton>
            </m.div>
          </Stack>
        </FormProvider>
      )}
    </>
  );
}
