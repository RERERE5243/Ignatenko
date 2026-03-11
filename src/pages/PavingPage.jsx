import PageShell from '../components/PageShell'
import Hero from '../components/Hero'
import FeatureGrid from '../components/FeatureGrid'
import StepsSection from '../components/StepsSection'
import CTASection from '../components/CTASection'
import ContactsSection from '../components/ContactsSection'
import LeadForm from '../components/forms/LeadForm'
import { pavingData } from '../data/siteContent'

export default function PavingPage() {
  return (
    <PageShell theme={pavingData.theme}>
      <Hero
        badge={pavingData.badge}
        title={pavingData.title}
        description={pavingData.description}
        primaryCta={pavingData.primaryCta}
        secondaryCta={pavingData.secondaryCta}
        metrics={pavingData.heroMetrics}
        theme={pavingData.theme}
      />

      <FeatureGrid
        badge="Преимущества"
        title="Подход, который работает на качество и доверие"
        text="Страница собрана под лидогенерацию: сильный оффер, понятные выгоды и ощущение аккуратного коммерческого сервиса."
        items={pavingData.advantages}
        theme={pavingData.theme}
      />

      <StepsSection
        badge="Как мы работаем"
        title="Понятный маршрут от заявки до готового объекта"
        text="Минимум лишних движений — максимум понятности по срокам, этапам и результату."
        steps={pavingData.process}
        theme={pavingData.theme}
      />

      <CTASection
        title={pavingData.ctaTitle}
        text={pavingData.ctaText}
        theme={pavingData.theme}
        primaryText="Рассчитать стоимость"
        secondaryText="Получить консультацию"
      />

      <LeadForm
        title={pavingData.formTitle}
        description={pavingData.formDescription}
        fields={pavingData.formFields}
        requiredFields={pavingData.requiredFields}
        successMessage={pavingData.successMessage}
        theme={pavingData.theme}
      />

      <ContactsSection theme={pavingData.theme} />
    </PageShell>
  )
}
