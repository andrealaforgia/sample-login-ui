package hello;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.encoding.LdapShaPasswordEncoder;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
				.csrf().disable()
				.authorizeRequests()
				.antMatchers("/static/**").permitAll()
				.antMatchers("/js/**").permitAll()
				.anyRequest().authenticated()
				.and()
				.formLogin()
				.loginPage("/signin")
				.permitAll()
				.and()
				.logout()
                .logoutUrl("/signout")
				.permitAll();
	}

	@Override
	public void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth
			.ldapAuthentication()
				.userDnPatterns("uid={0},ou=people")
				.contextSource()
					.url("ldap://localhost:8389/dc=elsevier,dc=com")
					.and()
				.passwordCompare()
					.passwordAttribute("userPassword");
	}

}
