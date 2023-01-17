import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:mobile/utils/assets.dart';

enum ImageType { network, asset }

class CustomImage extends StatelessWidget {
  final String? image;
  final ImageType type;
  final BoxFit? fit;
  final BorderRadius? borderRadius;
  final Color? svgColor;
  final Widget? placeHolder;
  final Widget? errorWidget;
  final double? height;
  final double? width;
  final int? memCacheHeight;
  final int? memCacheWidth;
  final BoxBorder? border;
  final List<BoxShadow>? boxShadow;

  const CustomImage.asset(
    this.image, {
    Key? key,
    this.fit = BoxFit.contain,
    this.borderRadius,
    this.svgColor,
    this.placeHolder,
    this.errorWidget,
    this.height,
    this.width,
    this.border,
    this.boxShadow,
    this.memCacheHeight,
    this.memCacheWidth,
  })  : type = ImageType.asset,
        super(key: key);

  const CustomImage.network(
    this.image, {
    Key? key,
    this.fit = BoxFit.contain,
    this.borderRadius,
    this.svgColor,
    this.placeHolder,
    this.errorWidget,
    this.height,
    this.width,
    this.border,
    this.boxShadow,
    this.memCacheHeight,
    this.memCacheWidth,
  })  : type = ImageType.network,
        super(key: key);

  @override
  Widget build(BuildContext context) {
    bool isSVG() => image!.endsWith('.svg');
    bool isNetwork() => type == ImageType.network ? true : false;

    dynamic tempImage;

    if (isNetwork()) {
      if (isSVG()) {
        tempImage = SvgPicture.network(
          image!,
          width: width,
          height: height,
          fit: fit!,
        );
      } else {
        tempImage = CachedNetworkImage(
          imageUrl: image!,
          width: width,
          height: height,
          fit: fit,
          memCacheHeight: memCacheHeight,
          memCacheWidth: memCacheWidth,
          placeholder: (_, __) => Center(
            child: placeHolder ?? const CircularProgressIndicator(),
          ),
          errorWidget: (_, __, ___) =>
              errorWidget ?? Image.asset(R.images.fail),
        );
      }
    } else {
      if (isSVG()) {
        tempImage = SvgPicture.asset(
          image!,
          width: width,
          height: height,
          color: svgColor,
          fit: fit!,
        );
      } else {
        tempImage = Image.asset(
          image!,
          width: width,
          height: height,
          fit: fit,
        );
      }
    }

    return Container(
      decoration: BoxDecoration(
        boxShadow: boxShadow,
        border: border,
      ),
      child: ClipRRect(
        borderRadius: borderRadius ?? BorderRadius.zero,
        child: tempImage,
      ),
    );
  }
}
