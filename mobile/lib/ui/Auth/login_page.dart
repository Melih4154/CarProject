import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:mobile/utils/assets.dart';
import 'package:mobile/utils/styles.dart';
import 'package:mobile/widgets/custom_images.dart';
import 'package:mobile/utils/extension.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  @override
  Widget build(BuildContext context) {
    final screenHeight = Get.height;
    final topPadding = context.mediaQueryPadding.top;
    final appBar = AppBar(
      backgroundColor: S.colors.orangeColor,
      elevation: 0,
      title: CustomImage.asset(
        R.images.appBarLogo,
        height: 40,
      ),
      centerTitle: true,
    );
    final appBarHeight = appBar.preferredSize.height;
    return Scaffold(
      backgroundColor: S.colors.orangeColor,
      body: SafeArea(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Image.asset(
              "assets/images/horizontalLogo.png",
              height: 40,
            ),
            Image.asset(
              "assets/images/signUpImageOne.png",
              width: 240.w,
            ),
            Container(
              decoration: const BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(20),
                  topRight: Radius.circular(20),
                ),
              ),
              width: MediaQuery.of(context).size.width,
              child: Padding(
                padding: const EdgeInsets.only(left: 24.0, right: 24.0, top: 24.0, bottom: 8.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    SizedBox(
                      height: 12.h,
                    ),
                    const Text(
                      "Start A Car'a Hoş Geldiniz",
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 22.0,
                      ),
                      textAlign: TextAlign.center,
                    ),
                    SizedBox(
                      height: 12.h,
                    ),
                    Text(
                      "Araç sahipleri araçları için hizmet alacakları\nişletmeyi seçerken, işletmeler de açık\nteklifleri görüp teklif verebilirler.",
                      style: S.textStyles.signUpText,
                      textAlign: TextAlign.center,
                    ),
                    SizedBox(
                      height: 12.h,
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        GestureDetector(
                          onTap: () async {},
                          child: ConstrainedBox(
                            constraints: BoxConstraints(maxHeight: 256.h, maxWidth: 120.w),
                            child: Image.asset(
                              "assets/images/userLogin.png",
                            ),
                          ),
                        ),
                        GestureDetector(
                          onTap: () async {},
                          child: ConstrainedBox(
                            constraints: BoxConstraints(maxHeight: 256.h, maxWidth: 120.w),
                            child: Image.asset(
                              "assets/images/businessLogin.png",
                            ),
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            )
          ],
        ),
      ),
    );

    // return Scaffold(
    //   appBar: appBar,
    //   body: SizedBox(
    //     height: Get.height,
    //     child: Stack(
    //       children: [
    //         Container(
    //           width: Get.width,
    //           height: (screenHeight - appBarHeight - topPadding) / 2 + 20,
    //           color: S.colors.orangeColor,
    //           child: CustomImage.asset(
    //             R.images.signUpImage,
    //             width: Get.width - 96.0,
    //           ),
    //         ),
    //         Align(
    //           alignment: Alignment.bottomCenter,
    //           child: Container(
    //             width: Get.width,
    //             height: (screenHeight - appBarHeight - topPadding) / 2,
    //             decoration: const BoxDecoration(
    //               color: Colors.white,
    //               borderRadius: BorderRadius.only(
    //                 topLeft: Radius.circular(20),
    //                 topRight: Radius.circular(20),
    //               ),
    //             ),
    //             child: Padding(
    //               padding: const EdgeInsets.only(left: 24.0, right: 24.0, top: 8.0, bottom: 8.0),
    //               child: Column(
    //                 crossAxisAlignment: CrossAxisAlignment.center,
    //                 children: [
    //                   const SizedBox(
    //                     height: 12.0,
    //                   ),
    //                   Text(
    //                     "Start A Car'a Hoş Geldiniz",
    //                     style: S.textStyles.signUpTitle,
    //                     textAlign: TextAlign.center,
    //                   ),
    //                   const SizedBox(
    //                     height: 18.0,
    //                   ),
    //                   Text(
    //                     "Araç sahipleri araçları için hizmet alacakları\nişletmeyi seçerken, işletmeler de açık\nteklifleri görüp teklif verebilirler.",
    //                     style: S.textStyles.signUpText,
    //                     textAlign: TextAlign.center,
    //                   ),
    //                   const SizedBox(
    //                     height: 18.0,
    //                   ),
    //                   Row(
    //                     mainAxisAlignment: MainAxisAlignment.spaceEvenly,
    //                     children: [
    //                       GestureDetector(
    //                         onTap: () async {},
    //                         child: ConstrainedBox(
    //                           constraints: BoxConstraints(maxHeight: screenHeight * 0.2, maxWidth: (Get.width - 72.0) / 2),
    //                           child: CustomImage.asset(
    //                             R.images.userLogin,
    //                           ),
    //                         ),
    //                       ),
    //                       GestureDetector(
    //                         onTap: () async {},
    //                         child: ConstrainedBox(
    //                           constraints: BoxConstraints(maxHeight: screenHeight * 0.2, maxWidth: (Get.width - 72.0) / 2),
    //                           child: CustomImage.asset(
    //                             R.images.businessLogin,
    //                           ),
    //                         ),
    //                       ),
    //                     ],
    //                   ),
    //                 ],
    //               ),
    //             ),
    //           ),
    //         )

    //       ],
    //     ),
    //   ),
    // );
  }
}
