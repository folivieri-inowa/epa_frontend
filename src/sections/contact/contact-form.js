import { m } from 'framer-motion';
import { useTranslation } from 'react-i18next';

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
export default function ContactForm() {
  const { t } = useTranslation();
  
  const FormSchema = Yup.object().shape({
    name: Yup.string()
      .required(t('contact.page.form.validation.name_required')),
    email: Yup.string().required(t('contact.page.form.validation.email_required')).email(t('contact.page.form.validation.email_valid')),
    phone: Yup.string().required(t('contact.page.form.validation.phone_required')),
    subject: Yup.string().required(t('contact.page.form.validation.subject_required')),
    message: Yup.string().required(t('contact.page.form.validation.message_required')),
  });

  const { enqueueSnackbar } = useSnackbar();
  const companyColors = useCompanyColors();

  const methods = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
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
  const formLabels = {
    name: t('contact.page.form.labels.name'),
    email: t('contact.page.form.labels.email'),
    phone: t('contact.page.form.labels.phone'),
    subject: t('contact.page.form.labels.subject'),
    message: t('contact.page.form.labels.message'),
    submit: t('contact.page.form.labels.submit'),
  };

  return (
    <>
      {isSubmitting && (
        <Backdrop open sx={{ zIndex: (theme) => theme.zIndex.modal + 1 }}>
          <CircularProgress color="primary" />
        </Backdrop>
      )}

      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Stack component={MotionViewport} spacing={10}>
          <m.div variants={varFade().inUp}>
            <Typography variant="h3">{t('contact.page.form.overline')}</Typography>
          </m.div>
          <Stack spacing={3}>
            <m.div variants={varFade().inUp}>
              <RHFTextField fullWidth name="name" label={formLabels.name} />
            </m.div>

            <m.div variants={varFade().inUp}>
              <RHFTextField fullWidth name="email" label={formLabels.email} />
            </m.div>

            <m.div variants={varFade().inUp}>
              <RHFTextField fullWidth name="phone" label={formLabels.phone} />
            </m.div>

            <m.div variants={varFade().inUp}>
              <RHFTextField fullWidth name="subject" label={formLabels.subject} />
            </m.div>

            <m.div variants={varFade().inUp}>
              <RHFTextField fullWidth name="message" label={formLabels.message} multiline rows={4} />
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
              sx={{
                bgcolor: 'common.white',
                color: 'common.black',
                width: '100%',
                border: `1px solid ${companyColors.primary}`,
                borderRadius: 2,
                transition: 'box-shadow 0.2s, border-color 0.2s, background 0.2s, color 0.2s',
                boxShadow: 'none',
                '&:hover': {
                  bgcolor: 'grey.100',
                  color: companyColors.primary,
                  borderColor: companyColors.primary,
                  boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
                }
              }}
            >
              {formLabels.submit}
            </LoadingButton>
          </m.div>
        </Stack>
      </FormProvider>
    </>
  );
}
