export interface FaqItemProps {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FaqItemProps[] = [
    {
      id: 1,
      question: "Pse duhet të blej një Paketë Turistike Dixhitale?",
      answer:
        "Një Paketë Turistike Dixhitale ofron një zgjidhje efektive me çmime më të ulëta se dyqanet fizike Vodafone, duke siguruar eksperiencë efikase për të gjitha nevojat tuaja të udhëtimit.",
    },
    {
      id: 2,
      question:
        "Si mund ta aktivizoj kartën time Sim? A mund të shkoj në një nga dyqanet Vodafone?",
      answer:
        "Ju mund ta aktivizoni kartën tuaj SIM lehtësisht duke vizituar çdo dyqan Vodafone gjatë orarit të punës, duke siguruar një proces pa probleme. Vetëm sigurohuni që të jepni numrin tuaj të porosisë dhe detajet e gjetura në emailin tuaj të konfirmimit, si dhe një ID ose pasaportë të vlefshme për të marrë kartën tuaj SIM.",
    },
    {
      id: 3,
      question: "A mund të përdor Paketën Turistike në Rajon?",
      answer:
        "Po, mund të përdorni Paketën e Turistit në rajonin e Ballkanit Perëndimor pa ndonjë kosto shtesë ose nevojë për të blerë paketë Roaming, pasi ofron të gjitha opsionet pa probleme në të gjithë zonën. Për më shumë informacion mbi detajet e roamingut në Ballkanin Perëndimor, ju lutemi referojuni: Roaming in Western Balkans | Vodafone",
    },
  ];