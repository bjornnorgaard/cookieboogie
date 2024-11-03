
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
        // =~= Theme Properties =~=
        "--theme-font-family-base": `system-ui`,
        "--theme-font-family-heading": `system-ui`,
        "--theme-font-color-base": "0 0 0",
        "--theme-font-color-dark": "255 255 255",
        "--theme-rounded-base": "9999px",
        "--theme-rounded-container": "12px",
        "--theme-border-base": "0px",
        // =~= Theme On-X Colors =~=
        "--on-primary": "255 255 255",
        "--on-secondary": "0 0 0",
        "--on-tertiary": "0 0 0",
        "--on-success": "0 0 0",
        "--on-warning": "0 0 0",
        "--on-error": "255 255 255",
        "--on-surface": "0 0 0",
        // =~= Theme Colors  =~=
        // primary | #22181C
        "--color-primary-50": "222 220 221", // #dedcdd
        "--color-primary-100": "211 209 210", // #d3d1d2
        "--color-primary-200": "200 197 198", // #c8c5c6
        "--color-primary-300": "167 163 164", // #a7a3a4
        "--color-primary-400": "100 93 96", // #645d60
        "--color-primary-500": "34 24 28", // #22181C
        "--color-primary-600": "31 22 25", // #1f1619
        "--color-primary-700": "26 18 21", // #1a1215
        "--color-primary-800": "20 14 17", // #140e11
        "--color-primary-900": "17 12 14", // #110c0e
        // secondary | #ef9995
        "--color-secondary-50": "253 240 239", // #fdf0ef
        "--color-secondary-100": "252 235 234", // #fcebea
        "--color-secondary-200": "251 230 229", // #fbe6e5
        "--color-secondary-300": "249 214 213", // #f9d6d5
        "--color-secondary-400": "244 184 181", // #f4b8b5
        "--color-secondary-500": "239 153 149", // #ef9995
        "--color-secondary-600": "215 138 134", // #d78a86
        "--color-secondary-700": "179 115 112", // #b37370
        "--color-secondary-800": "143 92 89", // #8f5c59
        "--color-secondary-900": "117 75 73", // #754b49
        // tertiary | #a4cbb4
        "--color-tertiary-50": "241 247 244", // #f1f7f4
        "--color-tertiary-100": "237 245 240", // #edf5f0
        "--color-tertiary-200": "232 242 236", // #e8f2ec
        "--color-tertiary-300": "219 234 225", // #dbeae1
        "--color-tertiary-400": "191 219 203", // #bfdbcb
        "--color-tertiary-500": "164 203 180", // #a4cbb4
        "--color-tertiary-600": "148 183 162", // #94b7a2
        "--color-tertiary-700": "123 152 135", // #7b9887
        "--color-tertiary-800": "98 122 108", // #627a6c
        "--color-tertiary-900": "80 99 88", // #506358
        // success | #709FEB
        "--color-success-50": "234 241 252", // #eaf1fc
        "--color-success-100": "226 236 251", // #e2ecfb
        "--color-success-200": "219 231 250", // #dbe7fa
        "--color-success-300": "198 217 247", // #c6d9f7
        "--color-success-400": "155 188 241", // #9bbcf1
        "--color-success-500": "112 159 235", // #709FEB
        "--color-success-600": "101 143 212", // #658fd4
        "--color-success-700": "84 119 176", // #5477b0
        "--color-success-800": "67 95 141", // #435f8d
        "--color-success-900": "55 78 115", // #374e73
        // warning | #F78154
        "--color-warning-50": "254 236 229", // #feece5
        "--color-warning-100": "253 230 221", // #fde6dd
        "--color-warning-200": "253 224 212", // #fde0d4
        "--color-warning-300": "252 205 187", // #fccdbb
        "--color-warning-400": "249 167 135", // #f9a787
        "--color-warning-500": "247 129 84", // #F78154
        "--color-warning-600": "222 116 76", // #de744c
        "--color-warning-700": "185 97 63", // #b9613f
        "--color-warning-800": "148 77 50", // #944d32
        "--color-warning-900": "121 63 41", // #793f29
        // error | #B10F2E
        "--color-error-50": "243 219 224", // #f3dbe0
        "--color-error-100": "239 207 213", // #efcfd5
        "--color-error-200": "236 195 203", // #ecc3cb
        "--color-error-300": "224 159 171", // #e09fab
        "--color-error-400": "200 87 109", // #c8576d
        "--color-error-500": "177 15 46", // #B10F2E
        "--color-error-600": "159 14 41", // #9f0e29
        "--color-error-700": "133 11 35", // #850b23
        "--color-error-800": "106 9 28", // #6a091c
        "--color-error-900": "87 7 23", // #570717
        // surface | #ece3ca
        "--color-surface-50": "252 251 247", // #fcfbf7
        "--color-surface-100": "251 249 244", // #fbf9f4
        "--color-surface-200": "250 248 242", // #faf8f2
        "--color-surface-300": "247 244 234", // #f7f4ea
        "--color-surface-400": "242 235 218", // #f2ebda
        "--color-surface-500": "236 227 202", // #ece3ca
        "--color-surface-600": "212 204 182", // #d4ccb6
        "--color-surface-700": "177 170 152", // #b1aa98
        "--color-surface-800": "142 136 121", // #8e8879
        "--color-surface-900": "116 111 99", // #746f63

    }
}
