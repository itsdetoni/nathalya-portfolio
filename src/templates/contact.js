import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {htmlToReact, safePrefix} from '../utils';

export default class Contact extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <article className="post page post-full">
              <header className="post-header">
                <h1 className="post-title underline">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
              </header>
              {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
              <div className="post-subtitle">
                {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
              </div>
              }
              {_.get(this.props, 'pageContext.frontmatter.img_path') && 
              <div className="post-thumbnail">
                <img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.img_path'))} alt={_.get(this.props, 'pageContext.frontmatter.title')} />
              </div>
              }
              <div className="post-content">
                {htmlToReact(_.get(this.props, 'pageContext.html'))}
                <form name="contactForm" method="POST" netlifyHoneypot="bot-field" data-netlify="true" id="contact-form"
                  className="contact-form">
                  <p className="screen-reader-text">
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  </p>
                  <p className="form-row">
                    <label className="form-label">Nome *</label>
                    <input type="text" name="nome" placeholder="Seu nome..." className="form-input"/>
                  </p>
                  <p className="form-row">
                    <label className="form-label">E-mail *</label>
                    <input type="email" name="email" placeholder="Seu E-mail..." className="form-input"/>
                  </p>
                  <p className="form-row">
                    <label className="form-label">Mensagem *</label>
                    <textarea name="message" placeholder="Escreva sua mensagem aqui..." className="form-textarea" rows="7" />
                  </p>
                  <input type="hidden" name="form-name" value="contactForm" />
                  <p className="form-row">
                    <button type="submit" className="button">Enviar mensagem</button>
                  </p>
                </form>
              </div>
            </article>
            </Layout>
        );
    }
}
