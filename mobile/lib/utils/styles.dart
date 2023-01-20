import 'package:flutter/material.dart';

class S {
  static final colors = _Colors();
  static final textStyles = _TextStyles();
}

class _Colors {
  final transparent = Colors.transparent;
  final blueColor = const Color(0xFF192DA1);
  final orangeColor = const Color(0xFFFA5419);
  final greenColor = const Color(0xFF43D17F);
  final grayTextColor = const Color(0xFF8C95A1);
  final blueTextColor = const Color(0xFF2D3540);
  final grayBG = const Color(0xFFF4F5F7);

  final redGradient = const [
    Color(0xffFE4F4E),
    Color(0xffFF8988),
  ];
  final greenGradient = const [
    Color(0xff15D05A),
    Color(0xff80FBAD),
  ];
  final blueGradient = const [
    Color(0xff2179CB),
    Color(0xff87C4FC),
  ];
}

class _TextStyles {
  final signUpTitle = const TextStyle(
    fontWeight: FontWeight.bold,
    fontSize: 22.0,
  );

  final signUpText = TextStyle(
    fontSize: 15.0,
    color: S.colors.grayTextColor,
  );
}
