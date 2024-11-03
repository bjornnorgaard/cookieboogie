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
        "--on-primary": "0 0 0",
        "--on-secondary": "0 0 0",
        "--on-tertiary": "0 0 0",
        "--on-success": "0 0 0",
        "--on-warning": "0 0 0",
        "--on-error": "0 0 0",
        "--on-surface": "0 0 0",
        // =~= Theme Colors  =~=
        // primary | #FB5012
        "--color-primary-50": "254 229 219", // #fee5db
        "--color-primary-100": "254 220 208", // #fedcd0
        "--color-primary-200": "254 211 196", // #fed3c4
        "--color-primary-300": "253 185 160", // #fdb9a0
        "--color-primary-400": "252 133 89", // #fc8559
        "--color-primary-500": "251 80 18", // #FB5012
        "--color-primary-600": "226 72 16", // #e24810
        "--color-primary-700": "188 60 14", // #bc3c0e
        "--color-primary-800": "151 48 11", // #97300b
        "--color-primary-900": "123 39 9", // #7b2709
        // secondary | #4C956C
        "--color-secondary-50": "228 239 233", // #e4efe9
        "--color-secondary-100": "219 234 226", // #dbeae2
        "--color-secondary-200": "210 229 218", // #d2e5da
        "--color-secondary-300": "183 213 196", // #b7d5c4
        "--color-secondary-400": "130 181 152", // #82b598
        "--color-secondary-500": "76 149 108", // #4C956C
        "--color-secondary-600": "68 134 97", // #448661
        "--color-secondary-700": "57 112 81", // #397051
        "--color-secondary-800": "46 89 65", // #2e5941
        "--color-secondary-900": "37 73 53", // #254935
        // tertiary | #4D9DE0
        "--color-tertiary-50": "228 240 250", // #e4f0fa
        "--color-tertiary-100": "219 235 249", // #dbebf9
        "--color-tertiary-200": "211 231 247", // #d3e7f7
        "--color-tertiary-300": "184 216 243", // #b8d8f3
        "--color-tertiary-400": "130 186 233", // #82bae9
        "--color-tertiary-500": "77 157 224", // #4D9DE0
        "--color-tertiary-600": "69 141 202", // #458dca
        "--color-tertiary-700": "58 118 168", // #3a76a8
        "--color-tertiary-800": "46 94 134", // #2e5e86
        "--color-tertiary-900": "38 77 110", // #264d6e
        // success | #bfc3c6
        "--color-success-50": "245 246 246", // #f5f6f6
        "--color-success-100": "242 243 244", // #f2f3f4
        "--color-success-200": "239 240 241", // #eff0f1
        "--color-success-300": "229 231 232", // #e5e7e8
        "--color-success-400": "210 213 215", // #d2d5d7
        "--color-success-500": "191 195 198", // #bfc3c6
        "--color-success-600": "172 176 178", // #acb0b2
        "--color-success-700": "143 146 149", // #8f9295
        "--color-success-800": "115 117 119", // #737577
        "--color-success-900": "94 96 97", // #5e6061
        // warning | #aa848e
        "--color-warning-50": "242 237 238", // #f2edee
        "--color-warning-100": "238 230 232", // #eee6e8
        "--color-warning-200": "234 224 227", // #eae0e3
        "--color-warning-300": "221 206 210", // #ddced2
        "--color-warning-400": "196 169 176", // #c4a9b0
        "--color-warning-500": "170 132 142", // #aa848e
        "--color-warning-600": "153 119 128", // #997780
        "--color-warning-700": "128 99 107", // #80636b
        "--color-warning-800": "102 79 85", // #664f55
        "--color-warning-900": "83 65 70", // #534146
        // error | #66a20a
        "--color-error-50": "232 241 218", // #e8f1da
        "--color-error-100": "224 236 206", // #e0ecce
        "--color-error-200": "217 232 194", // #d9e8c2
        "--color-error-300": "194 218 157", // #c2da9d
        "--color-error-400": "148 190 84", // #94be54
        "--color-error-500": "102 162 10", // #66a20a
        "--color-error-600": "92 146 9", // #5c9209
        "--color-error-700": "77 122 8", // #4d7a08
        "--color-error-800": "61 97 6", // #3d6106
        "--color-error-900": "50 79 5", // #324f05
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
