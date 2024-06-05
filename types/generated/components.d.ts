import type { Schema, Attribute } from '@strapi/strapi';

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
    doc: Attribute.Media;
  };
}

export interface InformationsCompanyInfo extends Schema.Component {
  collectionName: 'components_informations_company_infos';
  info: {
    displayName: 'companyInfo';
    icon: 'alien';
  };
  attributes: {
    name: Attribute.String;
    phone: Attribute.String;
  };
}

export interface InformationsCqp extends Schema.Component {
  collectionName: 'components_informations_cqps';
  info: {
    displayName: 'CQP';
    icon: 'apps';
  };
  attributes: {
    doc: Attribute.Media;
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
    doc: Attribute.Media;
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
    doc: Attribute.Media;
    date: Attribute.Date;
  };
}

export interface InformationsSst extends Schema.Component {
  collectionName: 'components_informations_ssts';
  info: {
    displayName: 'SST';
    icon: 'apps';
  };
  attributes: {
    doc: Attribute.Media;
    date: Attribute.Date;
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
    language: Attribute.Enumeration<
      [
        'French',
        'English',
        'Arabic',
        'Spanish',
        'Portuguese',
        'Italian',
        'German',
        'Serbian',
        'Tabasaran',
        'Russian',
        'Chinese',
        'Japanese',
        'Korean',
        'Creole',
        'Farsi'
      ]
    >;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
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
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'informations.cni': InformationsCni;
      'informations.company-info': InformationsCompanyInfo;
      'informations.cqp': InformationsCqp;
      'informations.kbis': InformationsKbis;
      'informations.pro-card': InformationsProCard;
      'informations.sst': InformationsSst;
      'informations.user-info': InformationsUserInfo;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
