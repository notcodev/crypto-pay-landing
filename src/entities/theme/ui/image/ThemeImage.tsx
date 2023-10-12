import Image from 'next/image'

export const ThemeImage = ({
  className,
  width,
  height,
  path,
  alt,
  darkFile,
  lightFile,
}: {
  className?: string
  width: number
  height: number
  path: string
  lightFile: string
  darkFile: string
  alt: string
}) => {
  return (
    <picture>
      <source
        srcSet={`${path}/${darkFile}`}
        media="(prefers-color-scheme: dark)"
      />
      <Image
        className={className}
        src={`${path}/${lightFile}`}
        alt={alt}
        width={width}
        height={height}
      />
    </picture>
  )
}
