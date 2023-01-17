import 'package:get/get.dart' hide Trans;

extension Responsive on num {
  // TODO Iphone 12 Pro Max icin ayarla
  double get w => this * Get.width / 375;
  double get h => this * Get.height / 812;
}
