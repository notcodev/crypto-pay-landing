declare type Appearance = 'auto' | 'light' | 'dark'
declare type Theme = Exclude<Appearance, 'auto'>
