class R {
  static final images = _Images();
}

class _Images {
  static const path = 'assets/images';
  final logo = '$path/horizontalLogoColored.png';
  final appBarLogo = '$path/horizontalLogo.png';
  final businessLogin = '$path/businessLogin.png';
  final signUpImage = '$path/signUpImageOne.png';
  final userLogin = '$path/userLogin.png';
  final fail = '$path/fail.svg';
}

final cacheImageList = [
  R.images.logo,
  R.images.businessLogin,
  R.images.signUpImage,
  R.images.userLogin,
  R.images.fail,
  R.images.appBarLogo,
];
