const isObject = (arg: unknown): arg is { [key: string]: boolean } => {
  return typeof arg === 'object' && !Array.isArray(arg) && arg !== null
}

export const clsx = (...args: unknown[]): string => {
  const classNames: string[] = []

  args.forEach((arg: unknown): void => {
    if (typeof arg === 'string' && !['', ' '].includes(arg)) {
      classNames.push(arg)
      return
    }

    if (isObject(arg)) {
      const conditionalClassNames: string[] = []

      Object.keys(arg).forEach((className: string) => {
        if (arg[className]) {
          conditionalClassNames.push(className)
        }
      })

      classNames.push(conditionalClassNames.join(' '))
    }
  })

  return classNames.join(' ')
}
