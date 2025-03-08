import {
  Fingerprint,
  BatteryCharging,
  UtensilsCrossed,
  Dumbbell,
  ClipboardList,
  MessageCircle,
} from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";

export const navItems = [
  { label: "O platformě", href: "#", id: "o-platforme" },
  { label: "Výhody", href: "#", id: "vyhody"},
  { label: "Recenze", href: "#", id: "recenze" },
];

 export const fullWorkoutPlan = {
    "Pondělí": [
      { exercise: "Dřepy", sets: "4", reps: "10" },
      { exercise: "Leg Press", sets: "4", reps: "12" },
      { exercise: "Výpady", sets: "3", reps: "15" },
      { exercise: "Lýtka na stroji", sets: "4", reps: "20" },
    ],
    "Úterý": [
      { exercise: "Bench Press", sets: "4", reps: "8" },
      { exercise: "Kliky na bradlech", sets: "3", reps: "12" },
      { exercise: "Tlaky s jednoručkami", sets: "4", reps: "10" },
    ],
    "Středa": [
      { exercise: "Mrtvý tah", sets: "4", reps: "8" },
      { exercise: "Přítahy na hrazdě", sets: "3", reps: "10" },
    ],
    "Čtvrtek": [
      { exercise: "Ramenní tlak", sets: "4", reps: "10" },
      { exercise: "Upažování", sets: "3", reps: "15" },
    ],
    "Pátek": [
      { exercise: "Dřepy s činkou", sets: "4", reps: "8" },
      { exercise: "Výpady", sets: "3", reps: "12" },
    ],
    "Sobota": [
      { exercise: "Bicepsové zdvihy", sets: "4", reps: "12" },
      { exercise: "Francouzský tlak", sets: "3", reps: "12" },
    ],
    "Neděle": [
      { exercise: "Odpočinek", sets: "-", reps: "-" },
      { exercise: "Lehké kardio", sets: "1", reps: "20 min" },
    ],
  };

  export const testimonials = [
    {
      user: "Tomáš Novák",
      company: "Fitness nadšenci",
      image: user1,
      text: "Gym2gether mi pomohl propojit se s osobním trenérem a sestavit tréninkový plán přesně na míru. Skvělá platforma pro každého, kdo chce posunout svůj fitness progress dál!",
    },
    {
      user: "Petra Veselá",
      company: "Začátečník ve fitness",
      image: user2,
      text: "Díky Gym2gether mám přehled o svých trénincích i stravě. Trenér mi pravidelně aktualizuje jídelníček a tréninkový plán. Už po pár týdnech vidím změny a používat tuto platformu je radost!",
    },
    {
      user: "David Marek",
      company: "Osobní trenér",
      image: user3,
      text: "Jako trenér oceňuji možnost jednoduše komunikovat se svými klienty, sledovat jejich pokroky a nastavovat cvičební plány a jídelníčky. Gym2gether mi ušetřil spoustu času a práce!",
    },
  ];


  export const features = [
    {
      icon: <UtensilsCrossed />, 
      text: "Sestavení jídelníčků",
      description: "Trenér vám připraví individuální jídelníček přizpůsobený vašim cílům a potřebám.",
    },
    {
      icon: <Dumbbell />,
      text: "Sestavení tréninkového plánu",
      description: "Osobní tréninkový plán vytvořený trenérem na základě vaší kondice a pokroku.",
    },
    {
      icon: <Fingerprint />, 
      text: "Přístup odkudkoli",
      description: "Platforma dostupná z jakéhokoliv zařízení kdykoli potřebujete.",
    },
    {
      icon: <BatteryCharging />, 
      text: "Kontrola formy trenérem",
      description: "Pravidelná analýza vaší formy a progresu s odborným dohledem trenéra.",
    },
    {
      icon: <ClipboardList />, 
      text: "Sledování pokroku",
      description: "Mějte přehled o svém pokroku díky detailnímu zaznamenávání statistik.",
    },
    {
      icon: <MessageCircle />, 
      text: "Chat s trenérem",
      description: "Možnost konzultace s trenérem kdykoliv máte otázky nebo potřebujete radu.",
    },
  ];


export const checklistItems = [
  {
    title: "Nechte se vést svým trenérem",
    description:
      "Mějte jistotu, že jdete správným směrem – váš osobní tréninkový plán je připraven přímo pro vás",
  },
  {
    title: "Mějte svého trenéra vždy po ruce",
    description:
      "Ptejte se kdykoli potřebujete. Společně najdete nejlepší cestu k dosažení vašich cílů",
  },
  {
    title: "Objevte svou skrytou sílu",
    description:
      "Každý trénink vás posune dál. Překonávejte překážky a budujte silnější verzi sebe sama",
  },
  {
    title: "Najděte motivaci každý den",
    description:
      "Vaše cesta ke zdraví a kondici začíná dnes. Udělejte první krok a nikdy se neohlížejte zpět",
  },
];

export const pricingOptions = [
  {
    title: "Klient",
    features: [
      "Komunikace s trenérem",
      "Vložení tělesných mír",
      "Získání tréninkového plánu",
    ],
  },
  {
    title: "Trenér",
    features: [
      "Komunikace s klienty",
      "Návrh jídelníčků uživateli",
      "Sestavení tréninku uživateli",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Dokumentace" },
  { href: "#", text: "Seznam cviků" },
  { href: "#", text: "Jídelníčky" },
];

export const platformLinks = [
  { href: "#", text: "Jak začít" },
  { href: "#", text: "Podporovaná zařízení" },
  { href: "#", text: "Systémové požadavky" },
];

export const communityLinks = [
  { href: "#", text: "Recenze" },
  { href: "#", text: "Setkání komunity" },
  { href: "#", text: "Konference" },
];
