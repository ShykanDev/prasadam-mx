// Shared types for SlideComponent

export type ImageSize = 'small' | 'medium' | 'large' | 'extra'

export const IMAGE_SIZE_MAP: Record<ImageSize, string> = {
  small: '140px',
  medium: '200px',
  large: '280px',
  extra: '400px',
}

export interface SlideFeature {
  icon?: string
  title: string
  desc: string
}

export interface SlideImageButton {
  href: string
  label: string
  /** Inline style string for custom button colors */
  style?: string
}

export interface SlideImage {
  src: string
  alt: string
  /** Semantic size. Takes priority over maxWidth if provided. */
  imageSize?: ImageSize
  /** Custom max-width (px/rem). Prefer imageSize when possible. */
  maxWidth?: string
  extraClass?: string
  button?: SlideImageButton
}

export interface SlideButton {
  href: string
  label: string
}

export interface SlideData {
  productName: string
  wallpaper: string
  overlay?: string
  title: string
  titleClass?: string
  subtitle: string
  accentColor: string
  infoTitle?: string
  infoText?: string
  features?: SlideFeature[]
  showPromo?: boolean
  promoGradientFrom?: string
  promoGradientVia?: string
  images?: SlideImage[]
  buttons?: SlideButton[]
  /** If true, uses a centered, more dramatic "Hero" layout instead of split. */
  isIntro?: boolean
}
