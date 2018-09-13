package com.cdv.ns.pqc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;

import com.cdv.nsite.common.CommonProperties;

@SpringBootApplication
@ImportResource(locations = { "classpath:com/cdv/ns/pqc/dubbox.xml", //
		"classpath:com/cdv/ns/pqc/ns-pqc-base.xml", //
		"classpath:com/cdv/nsite/fc/fc-api-base-dubbo.xml", //
		"classpath:com/cdv/nsite/mo/mo-api-base-dubbo.xml", //
		"classpath:com/cdv/nsite/wf/wf-api-base-dubbo.xml", //
		"classpath:com/cdv/nsite/uc/uc-api-base-dubbo.xml"})
public class Application {

	public static void main(String[] args) throws Exception {
		System.setProperty("dubbo.shutdown.hook", "true");
		String loc = CommonProperties.loadProperties2System(System.getProperty("spring.config.location"));
		System.getProperties().setProperty("application.version", CommonProperties.getVersion(Application.class));
		System.getProperties().setProperty("app.home", loc + "/..");

		SpringApplication.run(Application.class, args);
	}

}
