# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DemoSite.spec.js >> DemoSite handling
- Location: tests\DemoSite.spec.js:2:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
      - img [ref=e5]
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]:
        - generic [ref=e14] [cursor=pointer]:
          - generic [ref=e15]:
            - img [ref=e17]
            - text: Elements
          - img [ref=e22]
        - list [ref=e25]:
          - listitem [ref=e26] [cursor=pointer]:
            - link "Text Box" [ref=e27]:
              - /url: /text-box
              - img [ref=e28]
              - text: Text Box
          - listitem [ref=e30] [cursor=pointer]:
            - link "Check Box" [ref=e31]:
              - /url: /checkbox
              - img [ref=e32]
              - text: Check Box
          - listitem [ref=e34] [cursor=pointer]:
            - link "Radio Button" [ref=e35]:
              - /url: /radio-button
              - img [ref=e36]
              - text: Radio Button
          - listitem [ref=e38] [cursor=pointer]:
            - link "Web Tables" [ref=e39]:
              - /url: /webtables
              - img [ref=e40]
              - text: Web Tables
          - listitem [ref=e42] [cursor=pointer]:
            - link "Buttons" [ref=e43]:
              - /url: /buttons
              - img [ref=e44]
              - text: Buttons
          - listitem [ref=e46] [cursor=pointer]:
            - link "Links" [ref=e47]:
              - /url: /links
              - img [ref=e48]
              - text: Links
          - listitem [ref=e50] [cursor=pointer]:
            - link "Broken Links - Images" [ref=e51]:
              - /url: /broken
              - img [ref=e52]
              - text: Broken Links - Images
          - listitem [ref=e54] [cursor=pointer]:
            - link "Upload and Download" [ref=e55]:
              - /url: /upload-download
              - img [ref=e56]
              - text: Upload and Download
          - listitem [ref=e58] [cursor=pointer]:
            - link "Dynamic Properties" [ref=e59]:
              - /url: /dynamic-properties
              - img [ref=e60]
              - text: Dynamic Properties
      - generic [ref=e64] [cursor=pointer]:
        - generic [ref=e65]:
          - img [ref=e67]
          - text: Forms
        - img [ref=e73]
      - generic [ref=e77] [cursor=pointer]:
        - generic [ref=e78]:
          - img [ref=e80]
          - text: Alerts, Frame & Windows
        - img [ref=e85]
      - generic [ref=e89] [cursor=pointer]:
        - generic [ref=e90]:
          - img [ref=e92]
          - text: Widgets
        - img [ref=e98]
      - generic [ref=e102] [cursor=pointer]:
        - generic [ref=e103]:
          - img [ref=e105]
          - text: Interactions
        - img [ref=e110]
      - generic [ref=e114] [cursor=pointer]:
        - generic [ref=e115]:
          - img [ref=e117]
          - text: Book Store Application
        - img [ref=e122]
    - generic [ref=e124]:
      - heading "Text Box" [level=1] [ref=e125]
      - generic [ref=e127]:
        - generic [ref=e128]:
          - generic [ref=e130]: Full Name
          - textbox "Full Name" [ref=e132]: Anbukkarasi
        - generic [ref=e133]:
          - generic [ref=e135]: Email
          - textbox "name@example.com" [ref=e137]: anbushan22@gmail.com
        - generic [ref=e138]:
          - generic [ref=e140]: Current Address
          - textbox "Current Address" [ref=e142]: j2, wipro st, sholinganallur,chennai
        - generic [ref=e143]:
          - generic [ref=e145]: Permanent Address
          - textbox [ref=e147]: a7, mela sengundhar,st,srimushnam
        - button "Submit" [active] [ref=e150] [cursor=pointer]
        - generic [ref=e152]:
          - paragraph [ref=e153]: Name:Anbukkarasi
          - paragraph [ref=e154]: Email:anbushan22@gmail.com
          - paragraph [ref=e155]: Current Address :j2, wipro st, sholinganallur,chennai
          - paragraph [ref=e156]: "Permananet Address : a7, mela sengundhar,st,srimushnam"
    - generic [ref=e162]:
      - iframe [ref=e165]:
        - generic [ref=f4e2]:
          - link "Advertisement" [ref=f4e4] [cursor=pointer]:
            - /url: https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjssL4Kl--l1n3YXht4UWr2um8WvJfAHL00ec96cokrlckpwq-IkCyIEcc3K3v6ZPjfuMZNpUwWJZibuvDFpOnnfHpPTnhsekWCCMB7mNYlAdaeifGMxfB7uDnmvQpsD2LBKXm60yeRbbh_nw05qbOGNRvniqR-zk5L91xJTaA9it9EUg511C0tx6RqCgpz81Y89ShOsGh9dZYKLxaSOIt9yJJz-sdqeCKJugq377etYDu6u5aW8v6SpibEiUNPXUG-wA7Ov1DctbeN3AHXMiIz1jHjZjllqoMQcxCLqxfCWy5yYpuXjqA-OGKc6UC3uHDPUFv6x0mHOipMVRB9lbtA8cU3AelorDWel3mBNNJAGqCdjWv5SSR_-8qaY_8Cla4AFyqx3qFfq6Lv8i99uSpskng-8KaE8AYgozTFioE2-a0lsIBGKMZgejomo2kPTXmPTp_sWgI5-0FOD_VHHOR-jamhPXuLBOj0_p4n04BGArCPC4EUFk4bI-UzcrBPQEAoZpvatXKkLX8_hMkaxC2Ike3CRRc-5MzjSOIhaKQlLxDtDYQUpltHX3YMyEwPWmIIh0heFNZZFXLPGbJVXtNIMrH-CMtnd_qhDKEtgEeQF8GPjVLayxjCptlDZveftYvVmqaU-GMcGT4Hk3JR4PagT-n6rBZNJhYbkXo4rWe1zV_kckArX36ue4zf-y6RkCwTLoit1iHOygyOyGNWzsNPKdjs-mgaO8TVu_rFklaGlW3bqu6PIw6IY8VBWQ0nhnxPp4LPM_Wh1ctILmWtQsoFghUb_nMoM4kEIazy7hhb5kXwKumiQzCUIhD5mH-o1T3yYEBdkVkMY2TnCdlNL9Z9Dt-KwrP7JVYssTCM-na3R0K_lZaNy7zr3va5B8occxNvlByY6ERNbCl72w7wXVOJeNpV-PdYQ6baEOhv1MryfDGOMkj33V3uBNYtPBWtLdEnlwhUXUXjOP0CG-eep8HRgPLtdzPOflQ4owsesdH3PO5MTJ-IqTchvvlSkJlNyf7W1OZg5-YdABdJeIgoEooP3QFZCCXcy2Aln8yFeATYgZT3Od8xj8iHOjGJDJnW6tqaJfSmrQ7UsACCoAeZJZ6l4lMLvW9AkvDxqUbh6kyR3ih3jcT2TYZ36QB1FJadIBiMHwSyHf3jkiTvcdM93mnc-HatMx_KauD38ZaJK0idE7dqYdZnRjM8zavPCmsjlNqrzRpvATEB4Ej7J63qkkNVX8vviqUPVYRqcsUVj_z_bBXbCruipi5u3E98hCr5FFHqO1fC_J5qUoRmzsOEgfJhhGG1wzZNUriWeoF_UKzeaSNvf6j3AUPgTRLlQ2Hg_E-UnLOyLlBAVfboIKjgVYaAjXPnqvU3fvqx5oZe7D03ve8_BhNg3IiBo4XsvHZyBXhsb9aIQUJhmcTpm_zro7AlDuUHjxjIuav_TM4_Pc8xObQ_Pf2Yxs56WwprUiICcTk_Jszi3gR7Sm0X1vEM52aM4QX04FJ2R1bbdYjLYwbEMo59rp71lTcSNLJO9f_iMjCLJe8ZWLijrh496X1H5Bl-W2aRJmN2Kfu7Rp5xzd-rUmFquCexsYflz_qmILyr1MlobmLbdp6tpZ2eaTaFnVd9LRsNRI_Ts8f2dE2DZPp5KDbQ23f8vhY-zATRYoucbGJ409HXXUDGgeuJl6EkPxHn7mZEnswXImfmo4PFf7UmayWLsFD0SXs73RnEQ4IXnUuFovk-GJU5uNeBa--oNkutZbR891_U5xDPlaajSmmtJELfmg7HcDSKd-i7FxhtjWxwjpKnSWBvVESFHlJAz3qD0Ud_6Uc190ZUol7kKo3-V1egvBRGgJRDzVSd3kDU3dvK_Tgh_z&sai=AMfl-YREtRY-BuX0uC3yhD15rZVqVnZY-tms-ldRkF4pRbAb_WzwsAh-N9hZ6-d72UmtZDtu7iGsKfCPJQKjQvgJxNF-KK6RmUNFUSk_-JAhNqKpX8LX4Dg-iE9QEiIS5Bq0STs8bjt_1ReOLqCa9QLkHhK2ExqNiN8zIdgXCl3ORWr7LlAwbGUwtstpqF4oWgdK_KGEkTUk2r1wUYWMpIAcm054f-RYHbNXW-8hkDk-rHZItbcWlK_W3QujQ7QF26JbPvjybx4m94idXzEMqNXerwewGLx_jD_VuH7EXMkPUxB28zorSFiVOlFFpvSgRvcL1ofYSTDB8KndqwWx7oBnGxsBaj8rokeYvBM7w3nAzTZ3rbbFMh5I5epVV9MfO-3Nce43trHBDAj-LLqAn0wVn65hUrESH9hmZwb7AzjrlgFvBkk7bwxNM1mPL3Wk8ZUvZ1x70Lh52r1DI27_m5BIul8nub-c6BtEy6ZGttBg6o2C8FHw0fNdNdrssS_A6B3-vlru3kUw4v8mhE4umtIuCgW7hrdSARCVtGRbWUhqHabpSYW5mO9VwgqkYJW_lpk8Dw9vHPy6xMZKrxn5iuciCz8BnVIt__uO8KjVExb8KvniNQrurs7bb8B_YuGWjXmtWchbmzKYyKVLb10YtoNcqtSuUZ29ing9paEledNA_KAHryFvWVxYK6-nZFBeOOfKs9wUWaYLLU6i_QRIcHMbUJ6s1GBDbkyuDXELoVYoqCSHWVyTpHqqUyBSl6EOQYCWZ6p_wDrzl_6xNZitpvS7bFIFHesiBACgV3lHL0OqtFRlW1F714Ilzb7_jGkIddhgAXCBoRqotgTUIPN9kmV3c4vIwj1Bn7JvWJk-sOqzxVS7CLsutKaZbx82v9jf3duCez1gGE0Krh3N-C8EXF-kIPw&sig=Cg0ArKJSzCDe5AeBgxW-&fbs_aeid=%5Bgw_fbsaeid%5D&urlfix=1&adurl=https://quillbot.com/ai-content-detector%3Futm_source%3Ddfa%26utm_medium%3Dcpm%26utm_campaign%3Dawareness_aidetector_cluster1_vs_dv360_display_english_unitedstates%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D23681585750
            - img "Advertisement" [ref=f4e5]
          - generic [ref=f4e6]:
            - generic:
              - img [ref=f4e10] [cursor=pointer]
              - button [ref=f4e12] [cursor=pointer]:
                - img [ref=f4e13]
      - iframe [ref=e168]:
        - generic [ref=f3e2]:
          - link "Advertisement" [ref=f3e4] [cursor=pointer]:
            - /url: https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjstdIp_q3azwTcjvRlAB9q50muFTSLnr5lHBD1OIyGgvh3O9Ogej-8O7JAdD5jiO8NNCeNmDQVW0y-LAvJwdovpq6lcOt2vVYXcvIp-bu5Qqzpe0bo_aCzsYkUZ3DYLV1n7q5aYM9Ncher8ebUhcI75QONeWBVDGNnWHvYJxyWY68Mpzg-vvvrExUV9N_bVafnSrwsnTLuJ_Y5NSNI6ndvt30tl2-BgVcTrrVsoifVhtqPX4iwqcwKrdccob9O6S9ryVIg2xNBOeTf21GF0BPw6JW5fpzCP08qcEzU7BKaHb6mx8bIFyvJTiPz-7sH2HjsuBdAbPfu4aThNg9kSt6hn7fKP8QnBA4O_YRxFZ91lWlH1OyjPyI1MunSFdYp3pb_-wo09_k5wWFev3WJwy0XjheW3b0_o-Oa_Fxv_lUq0fJ8jO0MLMxeAbPNAV2DK0EwJLc7lPi-R1-LuAoVrq0HxKuoVMBwZzqdxjLWdjqg0lQ1qX-QRkBaCKqcEhvbW8ra_pbWvHPdv-hEcBvPvCSf7BqIk-ohYB1bLkVZRpjkbv_aGNsPMc-g7MwJfJrctEi88Fw0bybjEnBEvYYHM6XKQWOlyZRixpQZACINfQgG0hTKZmebTqcooN3O3wnYXeMcyRniAv5Zi0A93esugCSr6fSKNw3Xo8pek4j5JRMQkmHQKGr-BxBe7xZBKtGNwGgWCgs5nfpQ6rAyHhx5e1W5X0HhecOp86dVFifY_XyZOlNurZNLZTaFzJGV9-S0wh2kLw5cj1xN-k_mbWJbMJOldbbevMu42Ogp7bd48_7_Cg_iw1vJIIYbk3vUghzx5H1VG76HGXxzXKpxVo2qnhQXgFS2sBCgwwfjuCvnLk-g0UvkwCRcPWE8Byg2SkmXcg31FF_RPAdyQdrli1IPTlNzKo_HJmNNgHSs0yh3UGrL8GcLeSXx3-B74tTWkXBXMgbEcWRP5pz18MnkpDi9XQkEZvJaWxpqnONZCp_c5q43ygY7_N6CjHp8uw5hAhfoGenzfxmBqQkoIswaiEPEiSuM9FCZadZKkE3xeSs_LOguOhG8csYc3HRMpBOb3z7yPfALoinAmKX4nwqxQNr0lcG0_b3tkQMyxOmozRvLyKN1IqFT_Y4eHJDYuDHwD9Kn44Vf8Jg7ELenmNsf_aDzedg-P9QD-nqLION2JZslV3HKizatcBqJO0uVmOq6vy809u1VEBz41PooMZkXtc861VKYJvQsAeMuxgDcUZSEPxk4Rfb-eGFWBlDHh5U6HWkoO6ubNxfRQIU4d1ZEI-pqfr6AJ3TGMopaWwNwu0HlUlIxQyqV_unlUnzd0OG1EecEL3MSWUumB_AsFKKl2eGjs7Vk3d9Ac9PcKyUDyixf-JIAygIoT9iyTKe36qu2ITfIO4D6g155H6b0vWAp6Eu1GooXJPjjNFfHbmGnZzEHah12FxwDXgDcf_d3Frp9ukyQ_Pel4lR22n7dcSxx2q8FlL-S05ar8e88AzCSgJC8-bCqL_0aYH5zVHE-WOXkLcJCmFcZEDHtZTZCbPu7UAMqQUtrTjnGUCDu_atzi_yqUP94HIJdrtp3Y8bETbVbFmElx61j0_Cb1IVM3ruTVPYtwOh0JNNoBXf2BrHpbV_5MTYhe2nov5QpC7SO2Ihw2mVVlxb1cLHDN7OqICSvbB9BAc21Tb7FJyX4xICttBCl6gtSgxGy5kz-VtHYGt3vqI4w3Hfh8NBNbPfwwEk0r607_K6J_cV47PZl4NMkvFjN53Pqch_lJQvQmvOc3Wsp67ftrhn3k3EjPn8xaEx_fLvQWYoezCJxu1Xi_WlZMHAHCqnXe3G7fJ1BVPXtdfB1QypeWs2o3Mn3cFlU9YQwGTbibU5DenjsQn7ikWsnzZvVURECGK&sai=AMfl-YTefwHQToqU7-A5syNcTmTCOXdi7T4DVHPc9NvAzS9ktBEtWslbZc7zkt6OzNY-WRdeWUdEtIY-B5PEBeuBAZc-2vqLZuX_J2TMS2RkCyCfjl4CVb6_IQh15ijSb8rvfEevX7AAmyAJ-UZm33SjXHiOXTdJGUJHK4gYPJUEVnCK0VdD-n_2vys2CANN8I6mfiEwtDaLhAvHGboYevKHWDEyWE-9N7lKB4C4D5oM4Ym2NE0iTSXgNeBGcU97Z7A5vsJapy_SbF98usn_XanvdeBlHn7lZaPpxofNwHaGT8p8xlJCYBnYPJRSmaJ0WAY0Y32lOXCkrP_qsIE0xl_e6eZ32I5rbgu0m5JSSCPaOXeSIARBeEp1oojKQ1GsmBJ_Cq1J1hSJCCELj2-iwU1S9XB6tVOzK9OKVDDpRfyJPX_w2bkek5c_ZCY8sYrjRYWoN3UMm5TXei97vtUd-uqSz7AgcoeGO5rbKakLEJMbwrJT-VlXjj-JBNlzmAK29MRpZq8uyc33DEeSaAfGv1QZzdXbbJbYJXfBuGU5CxEYE70QGMsOXsUy_qCMk83D4InmTL4JKvKRyaireD-QeUU0bZ_vbfUu97397ajoOMTst6keV72_v0yyNucDH3m0XbhJSx5d8LDA7myRbe34Xr0fNjCfB2XmIBWkTpPtXHNF1c67ORHWViES1PC3-wpLEZ0pz_3_d9kxOxQnS9CMBcKgEB7ZrkLOudRXS_ZL-k0SKc7KURBEZz1071M6AJXu7MDToxj_4Pi3tA0upGwfIA4edmVgQjBbUogzKVsr0_QifevpCEzsjTQZIGWaufVQaDcbwL1mM-cuWYNucHm5DLwvtzMasj8tO9p0snyOKc3tnh61qbbTumI5kHuCp4oOoGGNo3da0oMSDkcNyw&sig=Cg0ArKJSzAEvKa4HlVa_&fbs_aeid=%5Bgw_fbsaeid%5D&urlfix=1&adurl=https://careers.ti.com/en/sites/CX/jobs%3Flocation%3DIndia%26locationId%3D300000000361484%26locationLevel%3Dcountry%26mode%3Dlocation%26HQS%3Dcorp-emp-rec-workplacein_null-dspbspros-car-gdv360_300x250-in_en_awr%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D23756364360
            - img "Advertisement" [ref=f3e5]
          - generic [ref=f3e6]:
            - generic:
              - img [ref=f3e10] [cursor=pointer]
              - button [ref=f3e12] [cursor=pointer]:
                - img [ref=f3e13]
  - contentinfo [ref=e169]:
    - generic [ref=e170]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import{test}  from '@playwright/test';
  2  | test('DemoSite handling', async({page}) => {
  3  |     await page.goto('https://demoqa.com/text-box')
  4  |     await page.locator('//input[@id="userName"]').fill('Anbukkarasi')
  5  |     await page.locator('//input[@id="userEmail"]').fill('anbushan22@gmail.com')
  6  |     await page.locator('//textarea[@id="currentAddress"]').fill('j2, wipro st, sholinganallur,chennai ')
  7  |     await page.locator('//textarea[@id="permanentAddress"]').fill( ' a7, mela sengundhar,st,srimushnam ')
  8  |     await page.locator('//button[@id="submit"]').click()
> 9  |     await page.waitForTimeout(6000)
     |                ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  10 | })
```