import * as React from 'react'
import { useTheme, SvgIcon } from '@mui/material'

export default function OpenAIIcon(props: any) {
  const theme = useTheme()
  const mainColor = theme.palette.primary.main

  return (
    <SvgIcon {...props}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g>
          <rect fill="none" x="0" y="0" width="24" height="24"></rect>
          <path
            d="M20.6811668,10.305924 C21.1410223,8.92406539 20.9826699,7.41029918 20.2472812,6.15337224 C19.1413477,4.22549236 16.9180795,3.2336489 14.7467508,3.70039876 C13.7808009,2.61089296 12.3930001,1.99130789 10.9380579,2.00009215 C8.71859012,1.99511291 6.74931918,3.42580271 6.06650346,5.54012887 C4.64069809,5.83248171 3.40998293,6.72602866 2.68979603,7.99246817 C1.57562827,9.91527468 1.82962558,12.3390763 3.31813851,13.9879209 C2.85828303,15.3697796 3.01663547,16.8835458 3.7520242,18.1404727 C4.85795764,20.0683526 7.0812259,21.0601961 9.25255455,20.5934462 C10.217871,21.682952 11.6063052,22.3025371 13.0612474,22.2931324 C15.2819821,22.298732 17.2518864,20.8667739 17.9347021,18.7505452 C19.3605075,18.4581924 20.5912227,17.5646454 21.3114096,16.2982059 C22.4243105,14.3753994 22.1696798,11.9535003 20.6818003,10.3046557 L20.6811668,10.305924 Z M13.0766175,20.9744511 C12.1878454,20.9757116 11.3269464,20.6653108 10.6446886,20.0969802 C10.6757292,20.0805434 10.7295749,20.0508309 10.7644163,20.0293368 L14.8009495,17.702911 C15.0074639,17.5859575 15.1341598,17.3665907 15.1328929,17.1295229 L15.1328929,11.4506416 L16.8388539,12.4336829 C16.8572248,12.4425335 16.869261,12.4602345 16.8717949,12.4804643 L16.8717949,17.1832583 C16.869261,19.2745128 15.1721686,20.970022 13.0766175,20.9744511 Z M4.85421276,17.4557562 C4.40828084,16.6832817 4.2477961,15.7778194 4.40066892,14.8990819 C4.43048229,14.9168985 4.48313144,14.94935 4.52055673,14.9709844 L8.56248872,17.3125875 C8.76737636,17.4328492 9.02110718,17.4328492 9.22662915,17.3125875 L14.1610593,14.4543046 L14.1610593,16.4332137 C14.162328,16.4535755 14.152813,16.473301 14.1369549,16.4860271 L10.0512543,18.852446 C8.23137,19.9036222 5.90719567,19.2787705 4.85484709,17.4557562 L4.85421276,17.4557562 Z M3.82802934,8.64977553 C4.27280638,7.87827076 4.97491871,7.28822188 5.81109955,6.98177714 C5.81109955,7.0166725 5.80919336,7.07821523 5.80919336,7.12135859 L5.80919336,11.7916272 C5.80792257,12.0289157 5.93500173,12.2490737 6.14150535,12.366449 L11.0842491,15.2158141 L9.37312826,16.2024012 C9.35597258,16.2138215 9.33436912,16.2157249 9.31530725,16.2074769 L5.22208767,13.8460124 C3.40294957,12.7940758 2.77899092,10.4700446 3.82739394,8.65040999 L3.82802934,8.64977553 Z M17.857098,11.9267756 L12.9157509,9.07677606 L14.6263882,8.09082342 C14.6435391,8.07940311 14.6651364,8.07749973 14.6841929,8.08574773 L18.7762559,10.4453088 C20.5980561,11.4966109 21.2224736,13.8244489 20.1699203,15.6440835 C19.7246337,16.4143194 19.023355,17.0043683 18.1880457,17.3114475 L18.1880457,12.5015974 C18.1899513,12.2643089 18.0635433,12.0447854 17.8577332,11.9267756 L17.857098,11.9267756 Z M19.5287353,9.39403627 C19.4989138,9.37557901 19.4462503,9.34375614 19.4088147,9.32211659 L15.3657794,6.97995336 C15.1608359,6.85966292 14.9070358,6.85966292 14.7014577,6.97995336 L9.76568066,9.83891999 L9.76568066,7.85953749 C9.76441166,7.83917085 9.77392916,7.81944067 9.78979166,7.80671152 L13.8766075,5.44163584 C15.6969886,4.38829884 18.0243353,5.01520938 19.0737986,6.84184211 C19.5173143,7.61322847 19.6778428,8.51636152 19.5274663,9.39403627 L19.5287353,9.39403627 Z M8.86685624,12.842583 L7.16112933,11.8593455 C7.14276776,11.8504932 7.13073776,11.8327886 7.12820513,11.8125548 L7.12820513,7.10882265 C7.12947144,5.01462169 8.83076625,3.31750956 10.9277846,3.31877347 C11.8148386,3.31877347 12.6734005,3.62986925 13.3553114,4.19641637 C13.3242866,4.21285635 13.2711014,4.24257478 13.2356445,4.26407322 L9.20116352,6.59096317 C8.9947541,6.70793998 8.86812256,6.92671822 8.86938887,7.16383336 L8.86685624,12.8413184 L8.86685624,12.842583 Z M9.76556777,10.8833499 L11.96337,9.61913977 L14.1611722,10.8827181 L14.1611722,13.4105065 L11.96337,14.6740848 L9.76556777,13.4105065 L9.76556777,10.8833499 Z"
            fill={mainColor}
            fillRule="nonzero"
          ></path>
        </g>
      </g>
    </SvgIcon>
  )
}