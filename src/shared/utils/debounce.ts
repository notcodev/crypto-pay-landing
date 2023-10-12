export const debounce = <T extends unknown[]>(
  callback: (...args: T) => void,
  timeout: number,
) => {
  let timer: NodeJS.Timeout | undefined

  return (...args: T) => {
    if (timer !== undefined) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => callback(...args), timeout)
  }
}
