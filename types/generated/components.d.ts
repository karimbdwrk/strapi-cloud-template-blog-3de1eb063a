import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface InformationsUserInfo extends Schema.Component {
  collectionName: 'components_informations_user_infos';
  info: {
    displayName: 'userInfo';
    icon: 'alien';
    description: '';
  };
  attributes: {
    firstname: Attribute.String;
    lastname: Attribute.String;
    birthday: Attribute.Date;
    height: Attribute.Integer;
    weight: Attribute.Integer;
    phone: Attribute.String;
    sports: Attribute.String;
    vehicle: Attribute.Boolean & Attribute.DefaultTo<false>;
    measurements: Attribute.Enumeration<['S', 'M', 'L', 'XL', 'XXL', 'XXXL']>;
    language: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Fran\u00E7ais ',
          'Anglais ',
          'Arabe ',
          'Espagnol ',
          'Portugais ',
          'Italien ',
          'Allemand ',
          'Serbe ',
          'Tabasaran ',
          'Russe ',
          'Chinois ',
          'Japonais ',
          'Cor\u00E9en ',
          'Cr\u00E9ole ',
          'Farsi'
        ]
      >;
  };
}

export interface InformationsSst extends Schema.Component {
  collectionName: 'components_informations_ssts';
  info: {
    displayName: 'SST';
    icon: 'apps';
  };
  attributes: {
    doc: Attribute.Media<'images'>;
    date: Attribute.Date;
  };
}

export interface InformationsProCard extends Schema.Component {
  collectionName: 'components_informations_pro_cards';
  info: {
    displayName: 'ProCard';
    icon: 'apps';
  };
  attributes: {
    doc: Attribute.Media<'images'>;
    date: Attribute.Date;
  };
}

export interface InformationsKbis extends Schema.Component {
  collectionName: 'components_informations_kbis';
  info: {
    displayName: 'KBIS';
    icon: 'apps';
  };
  attributes: {
    doc: Attribute.Media<'images'>;
    date: Attribute.Date;
  };
}

export interface InformationsCqp extends Schema.Component {
  collectionName: 'components_informations_cqps';
  info: {
    displayName: 'CQP';
    icon: 'apps';
  };
  attributes: {
    doc: Attribute.Media<'images'>;
    date: Attribute.Date;
  };
}

export interface InformationsCompanyInfo extends Schema.Component {
  collectionName: 'components_informations_company_infos';
  info: {
    displayName: 'companyInfo';
    icon: 'alien';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    phone: Attribute.String;
    siret: Attribute.BigInteger;
  };
}

export interface InformationsCni extends Schema.Component {
  collectionName: 'components_informations_cnis';
  info: {
    displayName: 'CNI';
    icon: 'apps';
  };
  attributes: {
    type: Attribute.Enumeration<
      ['idCard', 'residenceCard', 'passport', 'drivingLicense']
    >;
    expirationDate: Attribute.Date;
    doc: Attribute.Media<'images'>;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
      'informations.user-info': InformationsUserInfo;
      'informations.sst': InformationsSst;
      'informations.pro-card': InformationsProCard;
      'informations.kbis': InformationsKbis;
      'informations.cqp': InformationsCqp;
      'informations.company-info': InformationsCompanyInfo;
      'informations.cni': InformationsCni;
      'sections.hero': SectionsHero;
    }
  }
}
