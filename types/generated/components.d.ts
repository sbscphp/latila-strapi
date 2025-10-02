import type { Schema, Struct } from '@strapi/strapi';

export interface CardCard extends Struct.ComponentSchema {
  collectionName: 'components_card_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    src: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface LinkLinks extends Struct.ComponentSchema {
  collectionName: 'components_link_links';
  info: {
    displayName: 'links';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface WebSectionSection extends Struct.ComponentSchema {
  collectionName: 'components_web_section_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'card.card': CardCard;
      'link.links': LinkLinks;
      'web-section.section': WebSectionSection;
    }
  }
}
