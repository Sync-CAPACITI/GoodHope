package com.example.goodhope.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/parent-dashboard").setViewName("parent-dashboard");
        registry.addViewController("/school-dashboard").setViewName("school-dashboard");
        registry.addViewController("/practitioner-dashboard").setViewName("practitioner-dashboard");
    }
}
