import { ParallaxConfig } from 'ngx-parallax';

export interface HeroConfig {
  imgSrc?: string;
  parallaxConfig?: ParallaxConfig;
  title?: string;
  breadcrumbs?: HeroBreadcrumb[];
}

export interface HeroBreadcrumb {
  name?: string;
  link?: string;
}
