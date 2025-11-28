import React from 'react';

export interface TeamMember {
  name: string;
  enName: string;
  title: string;
  desc?: string;
  image: string;
  role?: string;
}

export interface BusinessItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export interface LocationContact {
  city: string;
  contactName: string;
  phone: string;
  email: string;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  QUALIFICATIONS = 'qualifications',
  TEAM = 'team',
  BUSINESS = 'business',
  PARTNERS = 'partners',
  CONTACT = 'contact'
}