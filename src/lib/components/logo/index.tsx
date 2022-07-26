/* eslint-disable react/jsx-props-no-spreading */
import { FC, SVGProps } from 'react';

export const Logo: FC<SVGProps<SVGSVGElement>> = (
  props: SVGProps<SVGSVGElement>
) => (
  <svg viewBox="0 0 81 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M0.0568182 9V0.272727H5.28977V1.21023H1.11364V4.15909H4.89773V5.09659H1.11364V9H0.0568182ZM8.88956
       9.15341C8.47479 9.15341 8.09837 9.07528 7.7603 8.91903C7.42223 8.75994 7.15376 8.53125 6.9549 8.23295C6.75604
        7.93182 6.65661 7.56818 6.65661 7.14205C6.65661 6.76705 6.73047 6.46307 6.8782 6.23011C7.02592 5.99432 7.22337
        5.80966 7.47053 5.67614C7.71768 5.54261 7.99041 5.44318 8.28871 5.37784C8.58984 5.30966 8.8924 5.25568
        9.19638 5.21591C9.59411 5.16477 9.91655 5.12642 10.1637 5.10085C10.4137 5.07244 10.5955 5.02557 10.7092
        4.96023C10.8256 4.89489 10.8839 4.78125 10.8839 4.61932V4.58523C10.8839 4.16477 10.7688 3.83807 10.5387
        3.60511C10.3114 3.37216 9.96626 3.25568 9.5032 3.25568C9.02308 3.25568 8.64666 3.3608 8.37393 3.57102C8.10121
        3.78125 7.90945 4.00568 7.79865 4.24432L6.84411 3.90341C7.01456 3.50568 7.24183 3.19602 7.52592 2.97443C7.81286
        2.75 8.12536 2.59375 8.46342 2.50568C8.80433 2.41477 9.13956 2.36932 9.46911 2.36932C9.67933 2.36932 9.92081
        2.39489 10.1935 2.44602C10.4691 2.49432 10.7347 2.59517 10.9904 2.74858C11.2489 2.90199 11.4634 3.13352 11.6339
        3.44318C11.8043 3.75284 11.8896 4.16761 11.8896 4.6875V9H10.8839V8.11364H10.8327C10.7646 8.25568 10.6509 8.40767
        10.4918 8.5696C10.3327 8.73153 10.1211 8.86932 9.85689 8.98295C9.59268 9.09659 9.27024 9.15341 8.88956 9.15341ZM9.04297
        8.25C9.4407 8.25 9.77592 8.17188 10.0487 8.01562C10.3242 7.85938 10.5316 7.65767 10.6708 7.41051C10.8129 7.16335 10.8839
        6.90341 10.8839 6.63068V5.71023C10.8413 5.76136 10.7475 5.80824 10.6026 5.85085C10.4606 5.89062 10.2958 5.92614 10.1083
        5.95739C9.92365 5.9858 9.74325 6.01136 9.56712 6.03409C9.39382 6.05398 9.2532 6.07102 9.14524 6.08523C8.88388 6.11932
        8.63956 6.17472 8.41229 6.25142C8.18786 6.32528 8.00604 6.4375 7.86683 6.58807C7.73047 6.7358 7.66229 6.9375 7.66229
        7.19318C7.66229 7.54261 7.79155 7.80682 8.05007 7.9858C8.31143 8.16193 8.6424 8.25 9.04297 8.25ZM18.3615 3.92045L17.4581
        4.17614C17.4013 4.02557 17.3175 3.87926 17.2067 3.73722C17.0987 3.59233 16.951 3.47301 16.7635 3.37926C16.576 3.28551
        16.3359 3.23864 16.0433 3.23864C15.6428 3.23864 15.3089 3.33097 15.0419 3.51562C14.7777 3.69744 14.6456 3.92898 14.6456
        4.21023C14.6456 4.46023 14.7365 4.65767 14.9183 4.80256C15.1001 4.94744 15.3842 5.06818 15.7706 5.16477L16.7422 5.40341C17.3274
        5.54545 17.7635 5.76278 18.0504 6.0554C18.3374 6.34517 18.4808 6.71875 18.4808 7.17614C18.4808 7.55114 18.3729 7.88636 18.157
        8.18182C17.9439 8.47727 17.6456 8.71023 17.2621 8.88068C16.8786 9.05114 16.4325 9.13636 15.924 9.13636C15.2564 9.13636 14.7038
        8.99148 14.2663 8.7017C13.8288 8.41193 13.5518 7.98864 13.4354 7.43182L14.3899 7.19318C14.4808 7.54545 14.6527 7.80966 14.9055
        7.9858C15.1612 8.16193 15.495 8.25 15.907 8.25C16.3757 8.25 16.7479 8.15057 17.0234 7.9517C17.3018 7.75 17.4411 7.50852 17.4411
        7.22727C17.4411 7 17.3615 6.80966 17.2024 6.65625C17.0433 6.5 16.799 6.38352 16.4695 6.30682L15.3786 6.05114C14.7791 5.90909
        14.3388 5.68892 14.0575 5.39062C13.7791 5.08949 13.6399 4.71307 13.6399 4.26136C13.6399 3.89205 13.7436 3.56534 13.951
        3.28125C14.1612 2.99716 14.4467 2.77415 14.8075 2.61222C15.1712 2.45028 15.5831 2.36932 16.0433 2.36932C16.6911 2.36932
        17.1996 2.51136 17.5689 2.79545C17.9411 3.07955 18.2053 3.45455 18.3615 3.92045ZM22.8413 2.45455V3.30682H19.4492V2.45455H22.8413ZM20.4379
        0.886364H21.4435V7.125C21.4435 7.40909 21.4847 7.62216 21.5671 7.7642C21.6523 7.90341 21.7603 7.99716 21.891 8.04545C22.0245 8.09091
         22.1651 8.11364 22.3129 8.11364C22.4237 8.11364 22.5146 8.10795 22.5856 8.09659C22.6566 8.08239 22.7134 8.07102 22.756 8.0625L22.9606
          8.96591C22.8924 8.99148 22.7972 9.01705 22.6751 9.04261C22.5529 9.07102 22.3981 9.08523 22.2106 9.08523C21.9265 9.08523 21.6481
           9.02415 21.3754 8.90199C21.1055 8.77983 20.881 8.59375 20.7021 8.34375C20.5259 8.09375 20.4379 7.77841 20.4379 7.39773V0.886364ZM34.8881
            3H33.8313C33.7688 2.69602 33.6594 2.42898 33.5032 2.19886C33.3498 1.96875 33.1623 1.77557 32.9407 1.61932C32.7219 1.46023
            32.479 1.34091 32.212 1.26136C31.945 1.18182 31.6665 1.14205 31.3768 1.14205C30.8484 1.14205 30.3697 1.27557 29.9407
            1.54261C29.5146 1.80966 29.1751 2.20312 28.9222 2.72301C28.6722 3.2429 28.5472 3.88068 28.5472 4.63636C28.5472 5.39205 28.6722
            6.02983 28.9222 6.54972C29.1751 7.0696 29.5146 7.46307 29.9407 7.73011C30.3697 7.99716 30.8484 8.13068 31.3768 8.13068C31.6665
            8.13068 31.945 8.09091 32.212 8.01136C32.479 7.93182 32.7219 7.81392 32.9407 7.65767C33.1623 7.49858 33.3498 7.30398 33.5032
             7.07386C33.6594 6.84091 33.7688 6.57386 33.8313 6.27273H34.8881C34.8086 6.71875 34.6637 7.1179 34.4535 7.47017C34.2433
             7.82244 33.9819 8.12216 33.6694 8.36932C33.3569 8.61364 33.006 8.79972 32.6168 8.92756C32.2305 9.0554 31.8171 9.11932
             31.3768 9.11932C30.6325 9.11932 29.9705 8.9375 29.391 8.57386C28.8114 8.21023 28.3555 7.69318 28.0231 7.02273C27.6907
             6.35227 27.5245 5.55682 27.5245 4.63636C27.5245 3.71591 27.6907 2.92045 28.0231 2.25C28.3555 1.57955 28.8114 1.0625
             29.391 0.698864C29.9705 0.335227 30.6325 0.153409 31.3768 0.153409C31.8171 0.153409 32.2305 0.217329 32.6168 0.34517C33.006
              0.473011 33.3569 0.660511 33.6694 0.90767C33.9819 1.15199 34.2433 1.45028 34.4535 1.80256C34.6637 2.15199 34.8086 2.55114
              34.8881 3ZM39.1186 9.13636C38.5277 9.13636 38.0092 8.99574 37.5632 8.71449C37.12 8.43324 36.7734 8.03977 36.5234 7.53409C36.2763
               7.02841 36.1527 6.4375 36.1527 5.76136C36.1527 5.07955 36.2763 4.48437 36.5234 3.97585C36.7734 3.46733 37.12 3.07244 37.5632
               2.79119C38.0092 2.50994 38.5277 2.36932 39.1186 2.36932C39.7095 2.36932 40.2266 2.50994 40.6697 2.79119C41.1158 3.07244
               41.4624 3.46733 41.7095 3.97585C41.9595 4.48437 42.0845 5.07955 42.0845 5.76136C42.0845 6.4375 41.9595 7.02841 41.7095
               7.53409C41.4624 8.03977 41.1158 8.43324 40.6697 8.71449C40.2266 8.99574 39.7095 9.13636 39.1186 9.13636ZM39.1186 8.23295C39.5675
                8.23295 39.9368 8.1179 40.2266 7.88778C40.5163 7.65767 40.7308 7.35511 40.87 6.98011C41.0092 6.60511 41.0788 6.19886 41.0788
                 5.76136C41.0788 5.32386 41.0092 4.91619 40.87 4.53835C40.7308 4.16051 40.5163 3.85511 40.2266 3.62216C39.9368 3.3892 39.5675
                 3.27273 39.1186 3.27273C38.6697 3.27273 38.3004 3.3892 38.0107 3.62216C37.7209 3.85511 37.5064 4.16051 37.3672 4.53835C37.228
                 4.91619 37.1584 5.32386 37.1584 5.76136C37.1584 6.19886 37.228 6.60511 37.3672 6.98011C37.5064 7.35511 37.7209 7.65767 38.0107
                 7.88778C38.3004 8.1179 38.6697 8.23295 39.1186 8.23295ZM43.6197 9V2.45455H44.5913V3.47727H44.6765C44.8129 3.12784 45.033 2.85653
                  45.337 2.66335C45.641 2.46733 46.006 2.36932 46.4322 2.36932C46.864 2.36932 47.2234 2.46733 47.5103 2.66335C47.8001 2.85653
                  48.0259 3.12784 48.1879 3.47727H48.256C48.4237 3.1392 48.6751 2.87074 49.0103 2.67188C49.3455 2.47017 49.7475 2.36932 50.2163
                   2.36932C50.8015 2.36932 51.2802 2.55256 51.6523 2.91903C52.0245 3.28267 52.2106 3.84943 52.2106 4.61932V9H51.2049V4.61932C51.2049
                    4.13636 51.0728 3.79119 50.8086 3.58381C50.5444 3.37642 50.2333 3.27273 49.8754 3.27273C49.4151 3.27273 49.0586 3.41193
                    48.8058 3.69034C48.5529 3.96591 48.4265 4.31534 48.4265 4.73864V9H47.4038V4.51705C47.4038 4.14489 47.283 3.84517 47.0415
                     3.6179C46.8001 3.38778 46.489 3.27273 46.1083 3.27273C45.8469 3.27273 45.6026 3.34233 45.3754 3.48153C45.1509 3.62074
                     44.9691 3.81392 44.8299 4.06108C44.6935 4.3054 44.6254 4.58807 44.6254 4.90909V9H43.6197ZM54.0494
                     11.4545V2.45455H55.021V3.49432H55.1403C55.2141 3.38068 55.3164 3.2358 55.4471 3.05966C55.5806 2.88068 55.771 2.72159 56.0181
                     2.58239C56.2681 2.44034 56.6062 2.36932 57.0323 2.36932C57.5835 2.36932 58.0692 2.5071 58.4897 2.78267C58.9102 3.05824
                     59.2383 3.44886 59.4741 3.95455C59.7099 4.46023 59.8278 5.05682 59.8278 5.74432C59.8278 6.4375 59.7099 7.03835 59.4741
                     7.54688C59.2383 8.05256 58.9116 8.4446 58.494 8.72301C58.0763 8.99858 57.5948 9.13636 57.0494 9.13636C56.6289 9.13636
                     56.2923 9.06676 56.0394 8.92756C55.7866 8.78551 55.592 8.625 55.4556 8.44602C55.3192 8.2642 55.2141 8.11364 55.1403
                     7.99432H55.055V11.4545H54.0494ZM55.038 5.72727C55.038 6.22159 55.1104 6.65767 55.2553 7.03551C55.4002 7.41051 55.6119
                     7.70455 55.8903 7.91761C56.1687 8.12784 56.5096 8.23295 56.913 8.23295C57.3335 8.23295 57.6843 8.12216 57.9656 7.90057C58.2496
                     7.67614 58.4627 7.375 58.6048 6.99716C58.7496 6.61648 58.8221 6.19318 58.8221 5.72727C58.8221 5.26705 58.7511 4.85227 58.609
                     4.48295C58.4698 4.1108 58.2582 3.81676 57.9741 3.60085C57.6928 3.3821 57.3391 3.27273 56.913 3.27273C56.5039 3.27273 56.1602
                      3.37642 55.8817 3.58381C55.6033 3.78835 55.3931 4.07528 55.2511 4.4446C55.109 4.81108 55.038 5.23864 55.038 5.72727ZM63.288
                      9.15341C62.8732 9.15341 62.4968 9.07528 62.1587 8.91903C61.8207 8.75994 61.5522 8.53125 61.3533 8.23295C61.1545 7.93182
                      61.055 7.56818 61.055 7.14205C61.055 6.76705 61.1289 6.46307 61.2766 6.23011C61.4244 5.99432 61.6218 5.80966 61.869
                      5.67614C62.1161 5.54261 62.3888 5.44318 62.6871 5.37784C62.9883 5.30966 63.2908 5.25568 63.5948 5.21591C63.9925 5.16477
                      64.315 5.12642 64.5621 5.10085C64.8121 5.07244 64.994 5.02557 65.1076 4.96023C65.2241 4.89489 65.2823 4.78125 65.2823
                      4.61932V4.58523C65.2823 4.16477 65.1673 3.83807 64.9371 3.60511C64.7099 3.37216 64.3647 3.25568 63.9016 3.25568C63.4215
                       3.25568 63.0451 3.3608 62.7724 3.57102C62.4996 3.78125 62.3079 4.00568 62.1971 4.24432L61.2425 3.90341C61.413 3.50568
                        61.6403 3.19602 61.9244 2.97443C62.2113 2.75 62.5238 2.59375 62.8619 2.50568C63.2028 2.41477 63.538 2.36932 63.8675
                        2.36932C64.0778 2.36932 64.3192 2.39489 64.592 2.44602C64.8675 2.49432 65.1332 2.59517 65.3888 2.74858C65.6474
                        2.90199 65.8619 3.13352 66.0323 3.44318C66.2028 3.75284 66.288 4.16761 66.288 4.6875V9H65.2823V8.11364H65.2312C65.163
                        8.25568 65.0494 8.40767 64.8903 8.5696C64.7312 8.73153 64.5195 8.86932 64.2553 8.98295C63.9911 9.09659 63.6687
                        9.15341 63.288 9.15341ZM63.4414 8.25C63.8391 8.25 64.1744 8.17188 64.4471 8.01562C64.7227 7.85938 64.93 7.65767
                        65.0692 7.41051C65.2113 7.16335 65.2823 6.90341 65.2823 6.63068V5.71023C65.2397 5.76136 65.146 5.80824 65.0011
                        5.85085C64.859 5.89062 64.6942 5.92614 64.5067 5.95739C64.3221 5.9858
                      64.1417 6.01136 63.9656 6.03409C63.7923 6.05398 63.6516 6.07102 63.5437
                      6.08523C63.2823 6.11932 63.038 6.17472 62.8107 6.25142C62.5863 6.32528 62.4045 6.4375 62.2653 6.58807C62.1289
                      6.7358 62.0607 6.9375 62.0607 7.19318C62.0607 7.54261 62.19 7.80682 62.4485 7.9858C62.7099 8.16193 63.0408 8.25
                      63.4414 8.25ZM69.1293 5.0625V9H68.1236V2.45455H69.0952V3.47727H69.1804C69.3338 3.14489 69.5668 2.87784 69.8793
                      2.67614C70.1918 2.47159 70.5952 2.36932 71.0895 2.36932C71.5327 2.36932 71.9205 2.46023 72.2528 2.64205C72.5852
                       2.82102 72.8438 3.09375 73.0284 3.46023C73.2131 3.82386 73.3054 4.28409 73.3054 4.84091V9H72.2997V4.90909C72.2997
                        4.39489 72.1662 3.99432 71.8991 3.70739C71.6321 3.41761 71.2656 3.27273 70.7997 3.27273C70.4787 3.27273 70.1918
                        3.34233 69.9389 3.48153C69.6889 3.62074 69.4915 3.82386 69.3466 4.09091C69.2017 4.35795 69.1293 4.68182 69.1293
                        5.0625ZM75.5565 11.4545C75.386 11.4545 75.234 11.4403 75.1005 11.4119C74.967 11.3864 74.8746 11.3608 74.8235
                        11.3352L75.0792 10.4489C75.3235 10.5114 75.5394 10.5341 75.7269 10.517C75.9144 10.5 76.0806 10.4162 76.2255
                        10.2656C76.3732 10.1179 76.5082 9.87784 76.6303 9.54545L76.8178 9.03409L74.3974 2.45455H75.4883L77.2951
                        7.67045H77.3633L79.1701 2.45455H80.261L77.4826 9.95455C77.3576 10.2926 77.2028 10.5724 77.0181 10.794C76.8335
                        11.0185 76.619 11.1847 76.3746 11.2926C76.1332 11.4006 75.8604 11.4545 75.5565 11.4545Z"
      fill="currentColor"
    />
  </svg>
);
