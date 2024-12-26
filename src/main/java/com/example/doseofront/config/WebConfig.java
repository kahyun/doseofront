package com.example.doseofront.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//컨트롤러 없이 바로 뷰로 연결하는 역할을 담당
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/book/insert").setViewName("book-insert");
        registry.addViewController("/book/list").setViewName("main");

    }
}