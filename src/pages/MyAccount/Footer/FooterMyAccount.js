import React from 'react';

const FooterMyAccount = () => {
  return (
    <footer className="bg-EAEAEA b-r-1 d-flex flex-row a-items-center j-content-between p-1 flex-wrap gap-1">
      <div className="dir d-flex gap-0-5 flex-column">
        <p className="m-0 inter-regular c-616161 f-s-16">Ante cualquier duda póngase en contacto por los siguientes medios:</p>
        <div className="d-flex flex-row gap-1 flex-wrap">
          <p className="m-0 inter-regular c-616161 f-s-14">info@rofina.com.ar</p>
          <p className="m-0 inter-regular c-616161 f-s-14">011-4344-9500</p>
        </div>
      </div>
      <div className="d-flex gap-0-5 a-items-center flex-wrap">
        <a href="mailto:info@rofina.com.ar" type="submit" className="btn size_1 white inter-medium f-s-16 m-0 c-ffffff W-100 d-flex flex-row a-items-center j-content-between">
          <div className="flex_info d-flex flex-row gap-1 a-items-center">
            <span className="btn_icon icon__envelopment"></span>
            <span className="white_filled">Contactanos</span>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default FooterMyAccount;
