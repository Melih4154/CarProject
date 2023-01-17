import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:mobile/utils/assets.dart';
import 'package:mobile/widgets/custom_images.dart';
import '../../utils//extension.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.deepOrangeAccent,
        elevation: 0,
        centerTitle: true,
        title: CustomImage.asset(R.images.appBarLogo, height: 50),
      ),
      body: SizedBox(
        height: Get.height,
        width: Get.width,
        child: Stack(
          children: [
            Container(
              color: Colors.blue,
              width: Get.width,
              height: Get.height / 2.3,
              child: Text("data"),
            ),
            Positioned(
              top: Get.height / 2.5,
              child: Container(
                width: Get.width,
                height: Get.height,
                decoration: const BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.only(
                    topLeft: Radius.circular(30),
                    topRight: Radius.circular(30),
                  ),
                ),
                child: Padding(
                  padding:
                      EdgeInsets.symmetric(horizontal: 10.w, vertical: 10.h),
                  child: Column(
                    children: [
                      Text("Start A Car'a Hoş Geldiniz"),
                      Text(
                          "Araç sahipleri araçları için hizmet alacakları işletmeyi seçerken, işletmelerde açık teklifleri görüp teklif verebilirler.",
                          textAlign: TextAlign.center),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          SizedBox(
                            width: Get.width / 2.5,
                            child: CustomImage.asset(
                              R.images.userLogin,
                              fit: BoxFit.fitWidth,
                              borderRadius: BorderRadius.circular(7),
                            ),
                          ),
                          SizedBox(
                            width: 30.w,
                          ),
                          SizedBox(
                            width: Get.width / 2.5,
                            child: CustomImage.asset(
                              R.images.businessLogin,
                              fit: BoxFit.fitWidth,
                              borderRadius: BorderRadius.circular(7),
                            ),
                          )
                        ],
                      )
                    ],
                  ),
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
