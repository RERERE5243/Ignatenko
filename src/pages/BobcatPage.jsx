import PageShell from '../components/PageShell'
import Hero from '../components/Hero'
import FeatureGrid from '../components/FeatureGrid'
import ServicesList from '../components/ServicesList'
import StepsSection from '../components/StepsSection'
import CTASection from '../components/CTASection'
import ContactsSection from '../components/ContactsSection'
import LeadForm from '../components/forms/LeadForm'
import { bobcatData } from '../data/siteContent'

export default function BobcatPage() {
  const scenarioCards = bobcatData.scenarios.map((item) => ({
    title: item,
    text: 'Подходит для рабочих задач, где важны скорость, манёвренность и удобная организация процесса.',
  }))

  return (
    <PageShell theme={bobcatData.theme}>
      <Hero
        badge={bobcatData.badge}
        title={bobcatData.title}
        description={bobcatData.description}
        primaryCta={bobcatData.primaryCta}
        secondaryCta={bobcatData.secondaryCta}
        metrics={bobcatData.heroMetrics}
        theme={bobcatData.theme}
      />

      <FeatureGrid
        badge="Описание услуги"
        title="Аренда техники без перегруженного согласования"
        text="Страница сфокусирована на коммерческой ясности: быстро показать пользу услуги, усилить доверие и подвести к заявке."
        items={bobcatData.introCards}
        theme={bobcatData.theme}
      />

      <FeatureGrid
        badge="Преимущества"
        title="Почему такой формат аренды удобен клиенту"
        text="Сильный акцент на скорости, понятности условий и практической ценности услуги для объекта."
        items={bobcatData.advantages}
        theme={bobcatData.theme}
      />

      <ServicesList
        badge="Сценарии использования"
        title="Для каких задач подходит Bobcat"
        text="Мини-погрузчик закрывает широкий спектр работ на частных участках, стройке и коммерческих площадках."
        items={bobcatData.scenarios}
        theme={bobcatData.theme}
      />

      <StepsSection
        badge="Как проходит работа"
        title="От заявки до выполнения задачи"
        text="Собрали процесс так, чтобы у клиента не возникало вопросов, что будет происходить дальше."
        steps={bobcatData.process}
        theme={bobcatData.theme}
      />

      <CTASection
        title={bobcatData.ctaTitle}
        text={bobcatData.ctaText}
        theme={bobcatData.theme}
        primaryText="Заказать технику"
        secondaryText="Уточнить стоимость"
      />

      <LeadForm
        title={bobcatData.formTitle}
        description={bobcatData.formDescription}
        fields={bobcatData.formFields}
        requiredFields={bobcatData.requiredFields}
        successMessage={bobcatData.successMessage}
        theme={bobcatData.theme}
      />

      <ContactsSection theme={bobcatData.theme} />
    </PageShell>
  )
}
