import { useState, useEffect } from "react";

import { useTranslation } from "next-i18next";

export const useGenerateLinks = () => {
  const { t } = useTranslation();

  const links = [
    { title: `${t("others.nav.one")}`, scroll: "About" },
    { title: `${t("others.nav.two")}`, scroll: "Tools" },
    { title: `${t("others.nav.three")}`, scroll: "Projects" },
    { title: `${t("others.nav.four")}`, scroll: "Experience" },
    { title: `${t("others.nav.five")}`, scroll: "Contacts" },
  ];

  return links;
};
