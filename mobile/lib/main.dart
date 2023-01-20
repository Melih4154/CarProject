import 'package:device_preview/device_preview.dart';
import 'package:flutter/material.dart';
import 'package:mobile/ui/Auth/login_page.dart';

void main() {
  runApp(
      // DevicePreview(
      //   builder: (context) => const MyApp(),
      // ),
      const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Start A Car',
      builder: DevicePreview.appBuilder,
      theme: ThemeData(
        primarySwatch: Colors.blue,
        backgroundColor: Colors.white,
      ),
      home: const LoginPage(),
    );
  }
}
