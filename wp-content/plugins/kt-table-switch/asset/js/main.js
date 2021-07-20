function switchTable(event) {
    let dataNumber = jQuery(event.target).data("table-number");
    jQuery(".kt-tabs > .kt-tab-content").each(function () {
        if (jQuery(this).data("table-number") === dataNumber)
            jQuery(this).css({display: "block"});
        else
            jQuery(this).css({display: "none"});
    })
}

jQuery(document).ready(() => {
    console.log("ready");
    let html = "";
    if (jQuery("#kt-tabs-phonecode").length != 0) {
        html = "<div class=\"kt-tabs\">\n" +
            "  <ul class=\"kt-tabs-control\">\n" +
            "    <li><span data-table-number=\"0\" onclick=\"switchTable(event)\">A</span></li>\n" +
            "    <li><span data-table-number=\"1\" onclick=\"switchTable(event)\">B</span></li>\n" +
            "    <li><span data-table-number=\"2\" onclick=\"switchTable(event)\">C</span></li>\n" +
            "    <li><span data-table-number=\"3\" onclick=\"switchTable(event)\">D</span></li>\n" +
            "    <li><span data-table-number=\"4\" onclick=\"switchTable(event)\">E</span></li>\n" +
            "    <li><span data-table-number=\"5\" onclick=\"switchTable(event)\">F</span></li>\n" +
            "    <li><span data-table-number=\"6\" onclick=\"switchTable(event)\">G</span></li>\n" +
            "    <li><span data-table-number=\"7\" onclick=\"switchTable(event)\">H</span></li>\n" +
            "    <li><span data-table-number=\"8\" onclick=\"switchTable(event)\">I</span></li>\n" +
            "    <li><span data-table-number=\"9\" onclick=\"switchTable(event)\">J</span></li>\n" +
            "    <li><span data-table-number=\"10\" onclick=\"switchTable(event)\">K</span></li>\n" +
            "    <li><span data-table-number=\"11\" onclick=\"switchTable(event)\">L</span></li>\n" +
            "    <li><span data-table-number=\"12\" onclick=\"switchTable(event)\">M</span></li>\n" +
            "    <li><span data-table-number=\"13\" onclick=\"switchTable(event)\">N</span></li>\n" +
            "    <li><span data-table-number=\"14\" onclick=\"switchTable(event)\">O</span></li>\n" +
            "    <li><span data-table-number=\"15\" onclick=\"switchTable(event)\">P</span></li>\n" +
            "    <li><span data-table-number=\"16\" onclick=\"switchTable(event)\">Q</span></li>\n" +
            "    <li><span data-table-number=\"17\" onclick=\"switchTable(event)\">R</span></li>\n" +
            "    <li><span data-table-number=\"18\" onclick=\"switchTable(event)\">S</span></li>\n" +
            "    <li><span data-table-number=\"19\" onclick=\"switchTable(event)\">T</span></li>\n" +
            "    <li><span data-table-number=\"20\" onclick=\"switchTable(event)\">U</span></li>\n" +
            "    <li><span data-table-number=\"21\" onclick=\"switchTable(event)\">V</span></li>\n" +
            "    <li><span data-table-number=\"22\" onclick=\"switchTable(event)\">W</span></li>\n" +
            "    <li><span data-table-number=\"23\" onclick=\"switchTable(event)\">Y</span></li>\n" +
            "    <li><span data-table-number=\"24\" onclick=\"switchTable(event)\">Z</span></li>\n" +
            "  </ul>\n" +
            "  <div class=\"kt-tab-content\" data-table-number=\"0\">\n" +
            "    <table style=\"border-collapse: collapse;\">\n" +
            "      <tbody style=\"text-align: left;\">\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl69\" style=\"height: 15px; width: 214px; background-color: #034ea2;\" height=\"20\"><strong><span style=\"color: #ffffff;\">Country</span></strong></td>\n" +
            "        <td class=\"xl69\" style=\"border-left: medium none; width: 161px; background-color: #034ea2; height: 15px;\"><strong><span style=\"color: #ffffff;\">Code</span></strong></td>\n" +
            "        <td class=\"xl70\" style=\"width: 151px; background-color: #034ea2; height: 15px;\"><strong><span style=\"color: #ffffff;\">City/Area Code</span></strong></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl72\" style=\"solid black; height: 104px; border-top: medium none; width: 214px;\" rowspan=\"6\" height=\"120\"><span style=\"color: #000000; font-size: 12pt;\">Afghanistan</span></td>\n" +
            "        <td class=\"xl72\" style=\"border-bottom: 0pt solid black; border-top: medium none; height: 104px; width: 161px;\" rowspan=\"6\"><span style=\"color: #000000; font-size: 12pt;\">[93]</span></td>\n" +
            "        <td class=\"xl63\" style=\"border-top: medium none; height: 25px; width: 151px;\"><span style=\"color: #000000; font-size: 12pt;\">Kabul (20)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl64\" style=\"height: 15px; width: 151px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Herat (40)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl64\" style=\"height: 15px; width: 151px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Jalalabad (60)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl64\" style=\"height: 15px; width: 151px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Kandahar (30)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl64\" style=\"height: 24px; width: 151px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Kunduz (56)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl65\" style=\"height: 10px; width: 151px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Mazar-i-Sherif (50)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl72\" style=\"height: 15px; border-top: medium none; width: 214px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Albania (DST)</span></td>\n" +
            "        <td class=\"xl72\" style=\"border-top: medium none; border-left: medium none; height: 15px; width: 161px;\"><span style=\"color: #000000; font-size: 12pt;\">[355]</span></td>\n" +
            "        <td class=\"xl67\" style=\"border-top: medium none; border-left: medium none; height: 15px; width: 151px;\"><span style=\"color: #000000; font-size: 12pt;\">Tirana (4)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl71\" style=\"height: 39px; width: 214px;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Algeria</span></td>\n" +
            "        <td class=\"xl71\" style=\"height: 39px; width: 161px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[213]</span></td>\n" +
            "        <td class=\"xl66\" style=\"border-left: medium none; height: 24px; width: 151px;\"><span style=\"color: #000000; font-size: 12pt;\">Algiers (21)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; border-left: medium none; width: 151px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Mascara (Oran) (45)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl71\" style=\"height: 15px; width: 214px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">American Samoa</span></td>\n" +
            "        <td class=\"xl71\" style=\"border-left: medium none; height: 15px; width: 161px;\"><span style=\"color: #000000; font-size: 12pt;\">[684]</span></td>\n" +
            "        <td class=\"xl66\" style=\"border-left: medium none; height: 15px; width: 151px;\"><span style=\"color: #000000; font-size: 12pt;\">Pago Pago*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl71\" style=\"height: 15px; width: 214px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Andorra (DST)</span></td>\n" +
            "        <td class=\"xl71\" style=\"border-left: medium none; height: 15px; width: 161px;\"><span style=\"color: #000000; font-size: 12pt;\">[376]</span></td>\n" +
            "        <td class=\"xl66\" style=\"border-left: medium none; height: 15px; width: 151px;\"><span style=\"color: #000000; font-size: 12pt;\">Andorra la*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl71\" style=\"height: 39px; width: 214px;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Angola</span></td>\n" +
            "        <td class=\"xl71\" style=\"height: 39px; width: 161px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[244]</span></td>\n" +
            "        <td class=\"xl66\" style=\"border-left: medium none; height: 24px; width: 151px;\"><span style=\"color: #000000; font-size: 12pt;\">Luanda (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; border-left: medium none; width: 151px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Huambo (41)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl71\" style=\"height: 39px; width: 214px;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Anguilla</span></td>\n" +
            "        <td class=\"xl71\" style=\"height: 39px; width: 161px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[1]</span></td>\n" +
            "        <td class=\"xl66\" style=\"border-left: medium none; height: 24px; width: 151px;\"><span style=\"color: #000000; font-size: 12pt;\">J The Valley (264)**</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; border-left: medium none; width: 151px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">(7-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl71\" style=\"height: 69px; width: 214px;\" rowspan=\"4\" height=\"80\"><span style=\"color: #000000; font-size: 12pt;\">Antigua &amp; Barbuda</span></td>\n" +
            "        <td class=\"xl71\" style=\"height: 69px; width: 161px;\" rowspan=\"4\"><span style=\"color: #000000; font-size: 12pt;\">[1]</span></td>\n" +
            "        <td class=\"xl66\" style=\"border-left: medium none; height: 24px; width: 151px;\"><span style=\"color: #000000; font-size: 12pt;\">St. John’s (268)**</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; border-left: medium none; width: 151px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">(7-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; border-left: medium none; width: 151px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Buenos Aires (11)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; border-left: medium none; width: 151px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Cordoba (351)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl71\" style=\"height: 54px; width: 214px;\" rowspan=\"3\" height=\"60\"><span style=\"color: #000000; font-size: 12pt;\">Argentina†</span></td>\n" +
            "        <td class=\"xl71\" style=\"height: 54px; width: 161px;\" rowspan=\"3\"><span style=\"color: #000000; font-size: 12pt;\">[54]</span></td>\n" +
            "        <td class=\"xl66\" style=\"border-left: medium none; height: 24px; width: 151px;\"><span style=\"color: #000000; font-size: 12pt;\">La Plata (221)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; border-left: medium none; width: 151px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Mendoza (261)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; border-left: medium none; width: 151px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Rosario (341)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl71\" style=\"height: 39px; width: 214px;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Armenia (DST)</span></td>\n" +
            "        <td class=\"xl71\" style=\"height: 39px; width: 161px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[374]</span></td>\n" +
            "        <td class=\"xl66\" style=\"border-left: medium none; height: 24px; width: 151px;\"><span style=\"color: #000000; font-size: 12pt;\">Yerevan (1)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; border-left: medium none; width: 151px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Ararat (38)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl71\" style=\"height: 15px; width: 214px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Aruba</span></td>\n" +
            "        <td class=\"xl71\" style=\"border-left: medium none; height: 15px; width: 161px;\"><span style=\"color: #000000; font-size: 12pt;\">[297]</span></td>\n" +
            "        <td class=\"xl66\" style=\"border-left: medium none; height: 15px; width: 151px;\"><span style=\"color: #000000; font-size: 12pt;\">J Oranjestad (8)**</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 13.5pt; text-align: left;\">\n" +
            "        <td class=\"xl71\" style=\"height: 144px; width: 214px;\" rowspan=\"9\" height=\"178\"><span style=\"color: #000000; font-size: 12pt;\">Australia†† (DST)</span></td>\n" +
            "        <td class=\"xl76\" style=\"width: 161px; height: 144px;\" rowspan=\"9\"><span style=\"color: #000000; font-size: 12pt;\">[61]</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">DST Note: Queensland, Northern, Territory, and Western, Australia do not use DST.</span></td>\n" +
            "        <td class=\"xl66\" style=\"border-left: medium none; height: 24px; width: 151px;\"><span style=\"color: #000000; font-size: 12pt;\">Canberra (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; border-left: medium none; width: 151px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Adelaide (8)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; border-left: medium none; width: 151px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Brisbane (7)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; border-left: medium none; width: 151px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Cairns (7)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; border-left: medium none; width: 151px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Melbourne (3)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; border-left: medium none; width: 151px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Perth (9)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; border-left: medium none; width: 151px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Sydney (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; border-left: medium none; width: 151px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Vienna (1)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; border-left: medium none; width: 151px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Graz (316)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl73\" style=\"height: 54px; width: 214px;\" rowspan=\"3\" height=\"60\"><span style=\"color: #000000; font-size: 12pt;\">Austria (DST)</span></td>\n" +
            "        <td class=\"xl71\" style=\"height: 54px; width: 161px;\" rowspan=\"3\"><span style=\"color: #000000; font-size: 12pt;\">[43]</span></td>\n" +
            "        <td class=\"xl66\" style=\"border-left: medium none; height: 24px; width: 151px;\"><span style=\"color: #000000; font-size: 12pt;\">Innsbruck (512)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; border-left: medium none; width: 151px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Linz (732)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; border-left: medium none; width: 151px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Salzburg (662)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl73\" style=\"border-bottom: 0pt solid black; height: 39px; width: 214px;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Azerbaijan (DST)</span></td>\n" +
            "        <td class=\"xl71\" style=\"border-bottom: 0pt solid black; height: 39px; width: 161px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[994]</span></td>\n" +
            "        <td class=\"xl66\" style=\"border-left: medium none; height: 24px; width: 151px;\"><span style=\"color: #000000; font-size: 12pt;\">Baku (12)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 15px; border-left: medium none; width: 151px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Gandja (222)</span></td>\n" +
            "      </tr>\n" +
            "      </tbody>\n" +
            "    </table>\n" +
            "  </div>\n" +
            "  <div class=\"kt-tab-content\" data-table-number=\"1\">\n" +
            "    <table style=\"border-collapse: collapse;\" border=\"1\" cellspacing=\"0\" cellpadding=\"0\">\n" +
            "      <tbody style=\"text-align: left;\">\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl65\" style=\"height: 43px; width: 161pt; background-color: #0156aa; text-align: center;\" width=\"215\" height=\"20\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">Country</span></strong></td>\n" +
            "        <td class=\"xl65\" style=\"width: 121pt; background-color: #0156aa; text-align: center; height: 43px;\" width=\"161\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">Code</span></strong></td>\n" +
            "        <td class=\"xl65\" style=\"width: 113pt; background-color: #0156aa; text-align: center; height: 43px;\" width=\"150\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">City/Area Code</span></strong></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 40px; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Bahamas (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 40px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[1]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 25px;\"><span style=\"color: #000000; font-size: 12pt;\">Nassau (242)**</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">(7-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 39px; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Bahrain</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[973]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Manama*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Dhaka (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 39px; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Bangladesh</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[880]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Barisal (431)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Chittagong(31)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 39px; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Barbados</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[1]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Bridgetown (246)**</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Mensk (17)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 39px; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Belarus (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[375]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Gomel (23)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Gorki (22)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 41.25pt; text-align: left;\">\n" +
            "        <td class=\"xl69\" style=\"height: 41px; text-align: left;\" height=\"55\"><span style=\"color: #000000; font-size: 12pt;\">Belgium (DST)</span></td>\n" +
            "        <td class=\"xl68\" style=\"width: 121pt; text-align: left; height: 41px;\" width=\"161\"><span style=\"color: #000000; font-size: 12pt;\">[32]</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">In 2000, area code plus local number = new national number.</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 41px;\"><span style=\"color: #000000; font-size: 12pt;\">Brussels*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Belize</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[501]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Belmopan (8)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Benin</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[229]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Porto-Novo*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 39px; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Bermuda (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[1]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Hamilton (441)**</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">(7-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 39px; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Bhutan</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[975]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Thimphu*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">La Paz (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 54px; text-align: left;\" rowspan=\"3\" height=\"60\"><span style=\"color: #000000; font-size: 12pt;\">Bolivia</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 54px;\" rowspan=\"3\"><span style=\"color: #000000; font-size: 12pt;\">[591]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Sucre (4)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Cochabamba (4)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Santa Cruz (3)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 39px; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Bosnia &amp; Herzegovina(DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[387]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Sarajevo (33)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Tuzla (35)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Botswana</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[267]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Gaborone*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 174px; text-align: left;\" rowspan=\"11\" height=\"221\"><span style=\"color: #000000; font-size: 12pt;\">Brazil†† (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 174px;\" rowspan=\"11\"><span style=\"color: #000000; font-size: 12pt;\">[55]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Brasilia (61)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15.75pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"21\"><span style=\"color: #000000; font-size: 12pt;\">Bel <span class=\"font5\">m (91)</span></span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Belo Horizonte (31)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Curitiba (41)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Manaus (92)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Porto Alegre (51)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Recife (81)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Rio de Janeiro (21)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Salvador (71)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Sao Paulo (11)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Vitoria (27)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Brunei</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[673]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Bandar Seri Begawan</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Bulgaria (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[359]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Sofia (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Burkina Faso</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[226]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Ouagadougou*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Burundi</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[257]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Bujumbura (2)</span></td>\n" +
            "      </tr>\n" +
            "      </tbody>\n" +
            "    </table>\n" +
            "  </div>\n" +
            "  <div class=\"kt-tab-content\" data-table-number=\"2\">\n" +
            "    <table style=\"border-collapse: collapse;\" border=\"1\" cellspacing=\"0\" cellpadding=\"0\">\n" +
            "      <tbody style=\"text-align: left;\">\n" +
            "      <tr style=\"height: 15pt; background-color: #0156aa;\">\n" +
            "        <td height=\"20\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">Country</span></strong></td>\n" +
            "        <td><strong><span style=\"color: #ffffff; font-size: 12pt;\">Code</span></strong></td>\n" +
            "        <td><strong><span style=\"color: #ffffff; font-size: 12pt;\">City/Area Code</span></strong></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 39px; text-align: left; width: 237px;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Cambodia</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; width: 178px; height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[855]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; width: 173px; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Phnom Penh (23)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Angkor Wat (63)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15.75pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 39px; text-align: left; width: 237px;\" rowspan=\"2\" height=\"41\"><span style=\"color: #000000; font-size: 12pt;\">Cameroon</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; width: 178px; height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[237]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; width: 173px; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Yaound <span class=\"font5\">*</span></span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 249px; text-align: left; width: 237px;\" rowspan=\"16\" height=\"320\"><span style=\"color: #000000; font-size: 12pt;\">Canada†† (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; width: 178px; height: 249px;\" rowspan=\"16\"><span style=\"color: #000000; font-size: 12pt;\">[1]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; width: 173px; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Ottawa, ON (613)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Calgary, AB (403)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Edmonton,AB (780)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Fredericton, NB (506)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Halifax, NS (902)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">London, ON (519)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Montreal, PQ (514)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Quebec City, PQ (418)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Regina, SK (306)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Saskatoon, SK (306)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">St. John’s, NF (709)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Toronto, ON Metro (416, 647)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Toronto Vicinity (905)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Vancouver, BC (604)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Victoria, BC (250)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Winnipeg, MB (204)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15px; text-align: left; width: 237px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Cape Verde Isl.</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; width: 178px; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[238]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; width: 173px; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Praia*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15px; text-align: left; width: 237px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Cayman Islands</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; width: 178px; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[1]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; width: 173px; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">George Town (345)**</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 39px; text-align: left; width: 237px;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Central African Republic</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; width: 178px; height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[236]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; width: 173px; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Bangui*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">(6-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15px; text-align: left; width: 237px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Chad</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; width: 178px; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[235]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; width: 173px; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">N’Djamena*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 39px; text-align: left; width: 237px;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Chagos Archipelago</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; width: 178px; height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[246]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; width: 173px; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Diego Garcia*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Santiago (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 129px; text-align: left; width: 237px;\" rowspan=\"8\" height=\"160\"><span style=\"color: #000000; font-size: 12pt;\">Chile (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; width: 178px; height: 129px;\" rowspan=\"8\"><span style=\"color: #000000; font-size: 12pt;\">[56]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; width: 173px; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Concepcion (41)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Punta Arenas (61)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Valparaiso (32)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Beijing (10)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Fuzhou (591)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Guangzhou (20)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Harbin (451)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Nanjing (25)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 129px; text-align: left; width: 237px;\" rowspan=\"8\" height=\"160\"><span style=\"color: #000000; font-size: 12pt;\">China, People’s Republic</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; width: 178px; height: 129px;\" rowspan=\"8\"><span style=\"color: #000000; font-size: 12pt;\">[86]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; width: 173px; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Nanjing Fujian (596)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Shanghai (21)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Shenzhen (755)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Tianjin (22)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Wuhan (27)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Xiamen (592)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Xian (29)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Bogota (1)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 54px; text-align: left; width: 237px;\" rowspan=\"3\" height=\"60\"><span style=\"color: #000000; font-size: 12pt;\">Colombia</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; width: 178px; height: 54px;\" rowspan=\"3\"><span style=\"color: #000000; font-size: 12pt;\">[57]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; width: 173px; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Barranquilla (5)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Cali (23)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Medellin (4)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15px; text-align: left; width: 237px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Comoros</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; width: 178px; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[269]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; width: 173px; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Moroni*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15px; text-align: left; width: 237px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Congo</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; width: 178px; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[242]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; width: 173px; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Brazzaville*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 39px; text-align: left; width: 237px;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Congo, Dem. Rep. of</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; width: 178px; height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[243]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; width: 173px; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Kinshasa (12)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Lubumbashi (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl70\" style=\"height: 39px; text-align: left; width: 237px;\" rowspan=\"2\" height=\"41\"><span style=\"color: #000000; font-size: 12pt;\">Cook Islands</span></td>\n" +
            "        <td class=\"xl70\" style=\"text-align: left; width: 178px; height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[682]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; width: 173px; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Avarua*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15.75pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"21\"><span style=\"color: #000000; font-size: 12pt;\">San Jos <span class=\"font5\">*</span></span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 39px; text-align: left; width: 237px;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Costa Rica</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; width: 178px; height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[506]</span></td>\n" +
            "        <td style=\"text-align: left; width: 173px; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">(7-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Yamoussoukro*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 54px; text-align: left; width: 237px;\" rowspan=\"3\" height=\"60\"><span style=\"color: #000000; font-size: 12pt;\">C<span class=\"font6\">๔</span><span class=\"font5\">te d’Ivoire</span></span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; width: 178px; height: 54px;\" rowspan=\"3\"><span style=\"color: #000000; font-size: 12pt;\">[225]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; width: 173px; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Abidjan*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">(8-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Zagreb (1)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 39px; text-align: left; width: 237px;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Croatia (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; width: 178px; height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[385]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; width: 173px; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Dubrovnik (20)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Split (21)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 39px; text-align: left; width: 237px;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Cuba (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; width: 178px; height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[53]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; width: 173px; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Havana (7)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Santiago (22)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 39px; text-align: left; width: 237px;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Cyprus (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; width: 178px; height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[357]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; width: 173px; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Nicosia (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">(8-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 18.75pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 95px; text-align: left; width: 237px;\" rowspan=\"5\" height=\"105\"><span style=\"color: #000000; font-size: 12pt;\">Czech Republic (DST)</span></td>\n" +
            "        <td class=\"xl69\" style=\"width: 178px; text-align: left; height: 80px;\" rowspan=\"4\"><span style=\"color: #000000; font-size: 12pt;\">[420]</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">In September 2002, area code</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">plus local number = new 9-digit</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">national number.</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; width: 173px; height: 35px;\"><span style=\"color: #000000; font-size: 12pt;\">Prague (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Brno (5)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Ostrava (69</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td style=\"height: 15px; text-align: left; width: 173px;\" height=\"20\"></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 178px;\" height=\"20\"></td>\n" +
            "        <td style=\"text-align: left; width: 173px; height: 15px;\"></td>\n" +
            "      </tr>\n" +
            "      </tbody>\n" +
            "    </table>\n" +
            "  </div>\n" +
            "  <div class=\"kt-tab-content\" data-table-number=\"3\">\n" +
            "    <table style=\"border-collapse: collapse;\" border=\"1\" cellspacing=\"0\" cellpadding=\"0\">\n" +
            "      <tbody style=\"text-align: left;\">\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl65\" style=\"height: 15px; width: 161pt; background-color: #0156aa; text-align: center;\" width=\"215\" height=\"20\"><span style=\"font-size: 12pt;\"><strong><span style=\"color: #ffffff;\">Country</span></strong></span></td>\n" +
            "        <td class=\"xl65\" style=\"width: 121pt; background-color: #0156aa; text-align: center; height: 15px;\" width=\"161\"><span style=\"font-size: 12pt;\"><strong><span style=\"color: #ffffff;\">Code</span></strong></span></td>\n" +
            "        <td class=\"xl65\" style=\"width: 113pt; background-color: #0156aa; text-align: center; height: 15px;\" width=\"150\"><span style=\"font-size: 12pt;\"><strong><span style=\"color: #ffffff;\">City/Area Code</span></strong></span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 31px; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 46px;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Denmark (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"height: 46px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[45]</span></td>\n" +
            "        <td class=\"xl66\" style=\"height: 31px;\"><span style=\"color: #000000; font-size: 12pt;\">Copenhagen*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">(8-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 39px;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Djibouti</span></td>\n" +
            "        <td class=\"xl67\" style=\"height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[253]</span></td>\n" +
            "        <td class=\"xl66\" style=\"height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Djibouti*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">(6-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Dominica</span></td>\n" +
            "        <td class=\"xl67\" style=\"height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[1]</span></td>\n" +
            "        <td class=\"xl66\" style=\"height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Roseau (767)**</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Dominican Republic</span></td>\n" +
            "        <td class=\"xl67\" style=\"height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[1]</span></td>\n" +
            "        <td class=\"xl66\" style=\"height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Santo Domingo (809)**</span></td>\n" +
            "      </tr>\n" +
            "      </tbody>\n" +
            "    </table>\n" +
            "  </div>\n" +
            "  <div class=\"kt-tab-content\" data-table-number=\"4\">\n" +
            "    <table style=\"border-collapse: collapse; background-color: #ffffff;\" border=\"1\" cellspacing=\"5\" cellpadding=\"0\">\n" +
            "      <tbody style=\"text-align: left;\">\n" +
            "      <tr style=\"height: 20px; background-color: #0156aa;\">\n" +
            "        <td class=\"xl65\" style=\"height: 15px; width: 161pt; text-align: center;\" width=\"215\" height=\"20\"><strong><span style=\"font-size: 12pt; color: #ffffff;\">Country</span></strong></td>\n" +
            "        <td class=\"xl65\" style=\"width: 121pt; text-align: center; height: 15px;\" width=\"161\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">Code</span></strong></td>\n" +
            "        <td class=\"xl65\" style=\"width: 113pt; text-align: center; height: 15px;\" width=\"150\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">City/Area Code</span></strong></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 69px;\" rowspan=\"4\" height=\"80\"><span style=\"color: #000000; font-size: 12pt;\">Ecuador</span></td>\n" +
            "        <td class=\"xl68\" style=\"height: 69px;\" rowspan=\"4\"><span style=\"color: #000000; font-size: 12pt;\">[593]</span></td>\n" +
            "        <td class=\"xl66\" style=\"height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Quito (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Guayaquil (4)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Cairo (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Alexandria (3)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 54px;\" rowspan=\"3\" height=\"60\"><span style=\"color: #000000; font-size: 12pt;\">Egypt (DST</span></td>\n" +
            "        <td class=\"xl68\" style=\"height: 54px;\" rowspan=\"3\"><span style=\"color: #000000; font-size: 12pt;\">[20]</span></td>\n" +
            "        <td class=\"xl66\" style=\"height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Aswan (97)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Luxor (95)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Port Said (66)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 15px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">El Salvador</span></td>\n" +
            "        <td class=\"xl67\" style=\"height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[503]</span></td>\n" +
            "        <td class=\"xl66\" style=\"height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">San Salvador*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 39px;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Equatorial Guinea</span></td>\n" +
            "        <td class=\"xl68\" style=\"height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[240]</span></td>\n" +
            "        <td class=\"xl66\" style=\"height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Malabo (9)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td style=\"height: 15px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Bata (8)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 15px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Estonia (DST)</span></td>\n" +
            "        <td class=\"xl68\" style=\"height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[372]</span></td>\n" +
            "        <td class=\"xl66\" style=\"height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Tallinn (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 15px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Ethiopia</span></td>\n" +
            "        <td class=\"xl68\" style=\"height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[251]</span></td>\n" +
            "        <td class=\"xl66\" style=\"height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Addis Ababa (1)</span></td>\n" +
            "      </tr>\n" +
            "      </tbody>\n" +
            "    </table>\n" +
            "  </div>\n" +
            "  <div class=\"kt-tab-content\" data-table-number=\"5\">\n" +
            "    <table style=\"border-collapse: collapse; text-align: center;\" border=\"1\" cellspacing=\"0\" cellpadding=\"0\">\n" +
            "      <tbody style=\"text-align: left;\">\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl65\" style=\"height: 20px; width: 215px; background-color: #0156aa; text-align: center;\"><span style=\"font-size: 12pt;\"><strong><span style=\"color: #ffffff;\">Country</span></strong></span></td>\n" +
            "        <td class=\"xl65\" style=\"width: 161px; background-color: #0156aa; text-align: center;\"><span style=\"font-size: 12pt;\"><strong><span style=\"color: #ffffff;\">Code</span></strong></span></td>\n" +
            "        <td class=\"xl65\" style=\"width: 150px; background-color: #0156aa; text-align: center;\"><span style=\"font-size: 12pt;\"><strong><span style=\"color: #ffffff;\">City/Area <span style=\"font-size: 12pt;\">Code</span></span></strong></span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15.75pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15.75pt; text-align: left;\" height=\"21\"><span style=\"color: #000000; font-size: 12pt;\">Faeroe Islands (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">[298]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">T๓rshavn*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Falkland Islands</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">[500]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Stanley*</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(5-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Fiji (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">[679]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Suva*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Finland (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">[358]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Helsinki (9)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 48.75pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 48.75pt; text-align: left;\" height=\"65\"><span style=\"color: #000000; font-size: 12pt;\">France (DST)</span></td>\n" +
            "        <td class=\"xl70\" style=\"width: 121pt; text-align: left;\" width=\"161\"><span style=\"color: #000000; font-size: 12pt;\">[33]</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">Old area codes plus</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">local number = new</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">9-digit national number.</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Paris*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">French Antilles</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">[590]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Guadeloupe*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 24.75pt; text-align: left;\" height=\"33\"><span style=\"color: #000000; font-size: 12pt;\">French Guiana</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">[594]</span></td>\n" +
            "        <td class=\"xl69\" style=\"width: 113pt; text-align: left;\" width=\"150\"><span style=\"color: #000000; font-size: 12pt;\">Cayenne*</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(9-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">French Polynesia††</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">[689]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Papeete, Tahiti*</span></td>\n" +
            "      </tr>\n" +
            "      </tbody>\n" +
            "    </table>\n" +
            "  </div>\n" +
            "  <div class=\"kt-tab-content\" data-table-number=\"6\">\n" +
            "    <table style=\"border-collapse: collapse;\" border=\"1\" cellspacing=\"5\" cellpadding=\"0\">\n" +
            "      <tbody style=\"text-align: left;\">\n" +
            "      <tr style=\"height: 20px; background-color: #0156aa;\">\n" +
            "        <td width=\"215\" height=\"20\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">Country</span></strong></td>\n" +
            "        <td width=\"161\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">Code</span></strong></td>\n" +
            "        <td class=\"xl65\" style=\"width: 113pt; text-align: center; height: 31px;\" width=\"150\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">City/Area Code</span></strong></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Gabon</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[241]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Libreville*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Gambia, The</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[220]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Banjul*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 144px; text-align: left;\" rowspan=\"9\" height=\"180\"><span style=\"color: #000000; font-size: 12pt;\">Georgia (DST)</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 144px;\" rowspan=\"9\"><span style=\"color: #000000; font-size: 12pt;\">[995]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Tbilisi (32)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Berlin (30)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Bonn (228)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Bremen (421)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Cologne (221)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Dresden (351)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Dusseldorf (211)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Essen (201)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Frankfurt am Main (69)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 144px; text-align: left;\" rowspan=\"9\" height=\"180\"><span style=\"color: #000000; font-size: 12pt;\">Germany (DST)</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 144px;\" rowspan=\"9\"><span style=\"color: #000000; font-size: 12pt;\">[49]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Freiburg (761)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Hamburg (40)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Hannover (511)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Heidelberg (6221)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Leipzig (341)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Munich (89)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Postdam (331)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Stuttgart (711)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Wiesbaden (611)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 39px; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Ghana</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[233]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Accra (21)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Kumasi (51)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 24px; text-align: left;\" height=\"33\"><span style=\"color: #000000; font-size: 12pt;\">Gibraltar (DST)</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">[350]</span></td>\n" +
            "        <td class=\"xl70\" style=\"width: 113pt; text-align: left; height: 24px;\" width=\"150\"><span style=\"color: #000000; font-size: 12pt;\">Gibraltar*</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(5-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 108.75pt; text-align: left;\">\n" +
            "        <td class=\"xl69\" style=\"height: 108px; text-align: left;\" height=\"145\"><span style=\"color: #000000; font-size: 12pt;\">Greece (DST)</span></td>\n" +
            "        <td class=\"xl70\" style=\"width: 121pt; text-align: left; height: 108px;\" width=\"161\"><span style=\"color: #000000; font-size: 12pt;\">[30]</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">In 2002, the trunk prefix ‘2’ (‘0’ until October 2002) plus an area code plus a local number = new 10- digit national number.As of October 2002, the prefix ‘2’ is required even for international calls to Greece.</span></td>\n" +
            "        <td class=\"xl71\" style=\"text-align: left; height: 108px;\"><span style=\"color: #000000; font-size: 12pt;\">Athens*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Greenland†† (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[299]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Nuuk (Godthaab)*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 24px; text-align: left;\" height=\"33\"><span style=\"color: #000000; font-size: 12pt;\">Grenada</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">[1]</span></td>\n" +
            "        <td class=\"xl70\" style=\"width: 113pt; text-align: left; height: 24px;\" width=\"150\"><span style=\"color: #000000; font-size: 12pt;\">St. George’s (473)**</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(7-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 24px; text-align: left;\" height=\"33\"><span style=\"color: #000000; font-size: 12pt;\">Guadeloupe</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">[590]</span></td>\n" +
            "        <td class=\"xl70\" style=\"width: 113pt; text-align: left; height: 24px;\" width=\"150\"><span style=\"color: #000000; font-size: 12pt;\">Basse-Terre (81)</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(10-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 24px; text-align: left;\" height=\"33\"><span style=\"color: #000000; font-size: 12pt;\">Guam</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">[1]</span></td>\n" +
            "        <td class=\"xl70\" style=\"width: 113pt; text-align: left; height: 24px;\" width=\"150\"><span style=\"color: #000000; font-size: 12pt;\">Agana (671)**</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(7-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 24px; text-align: left;\" height=\"33\"><span style=\"color: #000000; font-size: 12pt;\">Guatemala</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">[502]</span></td>\n" +
            "        <td class=\"xl70\" style=\"width: 113pt; text-align: left; height: 24px;\" width=\"150\"><span style=\"color: #000000; font-size: 12pt;\">Guatemala City*</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(7-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Guinea</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[224]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Conakry*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 24px; text-align: left;\" height=\"33\"><span style=\"color: #000000; font-size: 12pt;\">Guinea-Bissau</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">[245]</span></td>\n" +
            "        <td class=\"xl70\" style=\"width: 113pt; text-align: left; height: 24px;\" width=\"150\"><span style=\"color: #000000; font-size: 12pt;\">Bissau*</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(6-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 24px; text-align: left;\" height=\"33\"><span style=\"color: #000000; font-size: 12pt;\">Guyana</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">[592]</span></td>\n" +
            "        <td class=\"xl70\" style=\"width: 113pt; text-align: left; height: 24px;\" width=\"150\"><span style=\"color: #000000; font-size: 12pt;\">Georgetown*</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(7-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      </tbody>\n" +
            "    </table>\n" +
            "  </div>\n" +
            "  <div class=\"kt-tab-content\" data-table-number=\"7\">\n" +
            "    <table style=\"border-collapse: collapse; width: 526px;\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n" +
            "      <tbody style=\"text-align: left;\">\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl65\" style=\"height: 15pt; width: 161pt; text-align: left;\" width=\"215\" height=\"20\">Country</td>\n" +
            "        <td class=\"xl65\" style=\"width: 121pt; text-align: left;\" width=\"161\">Code</td>\n" +
            "        <td class=\"xl65\" style=\"width: 113pt; text-align: left;\" width=\"150\">City/Area Code</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl69\" style=\"height: 15pt; text-align: left;\" height=\"20\">Gabon</td>\n" +
            "        <td class=\"xl69\" style=\"text-align: left;\">[241]</td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\">Libreville*</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl69\" style=\"height: 15pt; text-align: left;\" height=\"20\">Gambia, The</td>\n" +
            "        <td class=\"xl69\" style=\"text-align: left;\">[220]</td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\">Banjul*</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl69\" style=\"height: 135pt; text-align: left;\" rowspan=\"9\" height=\"180\">Georgia (DST)</td>\n" +
            "        <td class=\"xl69\" style=\"text-align: left;\" rowspan=\"9\">[995]</td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\">Tbilisi (32)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\">Berlin (30)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\">Bonn (228)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\">Bremen (421)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\">Cologne (221)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\">Dresden (351)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\">Dusseldorf (211)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\">Essen (201)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\">Frankfurt am Main (69)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl69\" style=\"height: 135pt; text-align: left;\" rowspan=\"9\" height=\"180\">Germany (DST)</td>\n" +
            "        <td class=\"xl69\" style=\"text-align: left;\" rowspan=\"9\">[49]</td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\">Freiburg (761)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\">Hamburg (40)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\">Hannover (511)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\">Heidelberg (6221)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\">Leipzig (341)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\">Munich (89)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\">Postdam (331)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\">Stuttgart (711)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\">Wiesbaden (611)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl69\" style=\"height: 30pt; text-align: left;\" rowspan=\"2\" height=\"40\">Ghana</td>\n" +
            "        <td class=\"xl69\" style=\"text-align: left;\" rowspan=\"2\">[233]</td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\">Accra (21)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\">Kumasi (51)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl69\" style=\"height: 24.75pt; text-align: left;\" height=\"33\">Gibraltar (DST)</td>\n" +
            "        <td class=\"xl69\" style=\"text-align: left;\">[350]</td>\n" +
            "        <td class=\"xl71\" style=\"width: 113pt; text-align: left;\" width=\"150\">Gibraltar*<br>\n" +
            "          (5-digit numbers)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 108.75pt; text-align: left;\">\n" +
            "        <td class=\"xl70\" style=\"height: 108.75pt; text-align: left;\" height=\"145\">Greece (DST)</td>\n" +
            "        <td class=\"xl71\" style=\"width: 121pt; text-align: left;\" width=\"161\">[30]<br>\n" +
            "          In 2002, the trunk prefix ‘2’ (‘0’ until October 2002) plus an area code plus a local number = new 10- digit national number.As of October 2002, the prefix ‘2’ is required even for international calls to Greece.</td>\n" +
            "        <td class=\"xl72\" style=\"text-align: left;\">Athens*</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl69\" style=\"height: 15pt; text-align: left;\" height=\"20\">Greenland†† (DST)</td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left;\">[299]</td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\">Nuuk (Godthaab)*</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl69\" style=\"height: 24.75pt; text-align: left;\" height=\"33\">Grenada</td>\n" +
            "        <td class=\"xl69\" style=\"text-align: left;\">[1]</td>\n" +
            "        <td class=\"xl71\" style=\"width: 113pt; text-align: left;\" width=\"150\">St. George’s (473)**<br>\n" +
            "          (7-digit numbers)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl69\" style=\"height: 24.75pt; text-align: left;\" height=\"33\">Guadeloupe</td>\n" +
            "        <td class=\"xl69\" style=\"text-align: left;\">[590]</td>\n" +
            "        <td class=\"xl71\" style=\"width: 113pt; text-align: left;\" width=\"150\">Basse-Terre (81)<br>\n" +
            "          (10-digit numbers)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl69\" style=\"height: 24.75pt; text-align: left;\" height=\"33\">Guam</td>\n" +
            "        <td class=\"xl69\" style=\"text-align: left;\">[1]</td>\n" +
            "        <td class=\"xl71\" style=\"width: 113pt; text-align: left;\" width=\"150\">Agana (671)**<br>\n" +
            "          (7-digit numbers)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl69\" style=\"height: 24.75pt; text-align: left;\" height=\"33\">Guatemala</td>\n" +
            "        <td class=\"xl69\" style=\"text-align: left;\">[502]</td>\n" +
            "        <td class=\"xl71\" style=\"width: 113pt; text-align: left;\" width=\"150\">Guatemala City*<br>\n" +
            "          (7-digit numbers)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl69\" style=\"height: 15pt; text-align: left;\" height=\"20\">Guinea</td>\n" +
            "        <td class=\"xl69\" style=\"text-align: left;\">[224]</td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\">Conakry*</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl69\" style=\"height: 24.75pt; text-align: left;\" height=\"33\">Guinea-Bissau</td>\n" +
            "        <td class=\"xl69\" style=\"text-align: left;\">[245]</td>\n" +
            "        <td class=\"xl71\" style=\"width: 113pt; text-align: left;\" width=\"150\">Bissau*<br>\n" +
            "          (6-digit numbers)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl69\" style=\"height: 24.75pt; text-align: left;\" height=\"33\">Guyana</td>\n" +
            "        <td class=\"xl69\" style=\"text-align: left;\">[592]</td>\n" +
            "        <td class=\"xl71\" style=\"width: 113pt; text-align: left;\" width=\"150\">Georgetown*<br>\n" +
            "          (7-digit numbers)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td style=\"height: 15pt; text-align: left;\" height=\"20\"></td>\n" +
            "        <td style=\"text-align: left;\"></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15pt; text-align: left;\" height=\"20\">H :</td>\n" +
            "        <td style=\"text-align: left;\"></td>\n" +
            "        <td style=\"text-align: left;\"></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl65\" style=\"height: 15pt; text-align: left;\" height=\"20\">Country</td>\n" +
            "        <td class=\"xl65\" style=\"text-align: left;\">Code</td>\n" +
            "        <td class=\"xl65\" style=\"text-align: left;\">City/Area Code</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl69\" style=\"height: 24.75pt; text-align: left;\" height=\"33\">Haiti</td>\n" +
            "        <td class=\"xl69\" style=\"text-align: left;\">[509]</td>\n" +
            "        <td class=\"xl71\" style=\"width: 113pt; text-align: left;\" width=\"150\">Port-au-Prince<br>\n" +
            "          (6-digit numbers)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl69\" style=\"height: 24.75pt; text-align: left;\" height=\"33\">Honduras</td>\n" +
            "        <td class=\"xl69\" style=\"text-align: left;\">[504]</td>\n" +
            "        <td class=\"xl71\" style=\"width: 113pt; text-align: left;\" width=\"150\">Tegucigalpa<br>\n" +
            "          (7-digit numbers)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl69\" style=\"height: 24.75pt; text-align: left;\" height=\"33\">Hong Kong</td>\n" +
            "        <td class=\"xl69\" style=\"text-align: left;\">[852]</td>\n" +
            "        <td class=\"xl71\" style=\"width: 113pt; text-align: left;\" width=\"150\">Hong Kong*<br>\n" +
            "          (8-digit numbers)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl69\" style=\"height: 30pt; text-align: left;\" rowspan=\"2\" height=\"40\">Hungary (DST)</td>\n" +
            "        <td class=\"xl69\" style=\"text-align: left;\" rowspan=\"2\">[36]</td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\">Budapest (1)</td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\">Miskolc (46)</td>\n" +
            "      </tr>\n" +
            "      </tbody>\n" +
            "    </table>\n" +
            "  </div>\n" +
            "  <div class=\"kt-tab-content\" data-table-number=\"8\">\n" +
            "    <table style=\"border-collapse: collapse;\" border=\"1\" cellspacing=\"5\" cellpadding=\"0\">\n" +
            "      <tbody style=\"text-align: left;\">\n" +
            "      <tr style=\"height: 20px; background-color: #0156aa;\">\n" +
            "        <td width=\"215\" height=\"20\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">Country</span></strong></td>\n" +
            "        <td width=\"161\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">Code</span></strong></td>\n" +
            "        <td style=\"width: 175px;\" width=\"150\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">City/Area Code</span></strong></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 13.5pt; text-align: left;\">\n" +
            "        <td class=\"xl70\" style=\"height: 84px; text-align: left; width: 216px;\" rowspan=\"5\" height=\"98\"><span style=\"color: #000000; font-size: 12pt;\">Iceland</span></td>\n" +
            "        <td class=\"xl72\" style=\"width: 162px; text-align: left; height: 84px;\" rowspan=\"5\" width=\"161\"><span style=\"color: #000000; font-size: 12pt;\">[354]</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(7-digit numbers)</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px; width: 175px;\"><span style=\"color: #000000; font-size: 12pt;\">Reykjavik</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 175px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">New Delhi (11)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 175px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Ahmadabad (79)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 175px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Bangalore (80)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 175px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Calcutta (33)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl70\" style=\"height: 159px; text-align: left; width: 216px;\" rowspan=\"10\" height=\"200\"><span style=\"color: #000000; font-size: 12pt;\">India</span></td>\n" +
            "        <td class=\"xl70\" style=\"text-align: left; height: 159px; width: 162px;\" rowspan=\"10\"><span style=\"color: #000000; font-size: 12pt;\">[91]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px; width: 175px;\"><span style=\"color: #000000; font-size: 12pt;\">Hyderabad (40)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 175px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Jaipur (141)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 175px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Kanpur (512)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 175px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Lucknow (522)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 175px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Madras (44)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 175px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Mumbai (Bombay) (22)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 175px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Jakarta (21)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 175px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Bandung (22)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 175px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Denpasar, Bali (361)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 175px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Padang (751)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl70\" style=\"height: 129px; text-align: left; width: 216px;\" rowspan=\"8\" height=\"160\"><span style=\"color: #000000; font-size: 12pt;\">Indonesia††</span></td>\n" +
            "        <td class=\"xl70\" style=\"text-align: left; height: 129px; width: 162px;\" rowspan=\"8\"><span style=\"color: #000000; font-size: 12pt;\">[62]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px; width: 175px;\"><span style=\"color: #000000; font-size: 12pt;\">Palu (451)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 175px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Palembang (711)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 175px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Semarang (24)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 175px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Sinjai (482)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 175px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Surabaya (31)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 175px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Yogyakarta (274)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 175px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Tehran (21)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 175px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Esfahan (311)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl70\" style=\"height: 69px; text-align: left; width: 216px;\" rowspan=\"4\" height=\"80\"><span style=\"color: #000000; font-size: 12pt;\">Iran (DST)</span></td>\n" +
            "        <td class=\"xl70\" style=\"text-align: left; height: 69px; width: 162px;\" rowspan=\"4\"><span style=\"color: #000000; font-size: 12pt;\">[98]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px; width: 175px;\"><span style=\"color: #000000; font-size: 12pt;\">Mashhad (511)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 175px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Shiraz (71)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 175px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Tabriz (41)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 175px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Baghdad (1)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl70\" style=\"height: 84px; text-align: left; width: 216px;\" rowspan=\"5\" height=\"100\"><span style=\"color: #000000; font-size: 12pt;\">Iraq (DST)</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px; width: 162px;\"><span style=\"color: #000000; font-size: 12pt;\">[964]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px; width: 175px;\"><span style=\"color: #000000; font-size: 12pt;\">Basra (40)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td style=\"height: 15px; text-align: left; width: 162px;\" height=\"20\"></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px; width: 175px;\"><span style=\"color: #000000; font-size: 12pt;\">Erbil (66)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td style=\"height: 15px; text-align: left; width: 162px;\" height=\"20\"></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px; width: 175px;\"><span style=\"color: #000000; font-size: 12pt;\">Sulayamaniyah (53)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td style=\"height: 15px; text-align: left; width: 162px;\" height=\"20\"></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px; width: 175px;\"><span style=\"color: #000000; font-size: 12pt;\">Dublin (1)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td style=\"height: 15px; text-align: left; width: 162px;\" height=\"20\"></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px; width: 175px;\"><span style=\"color: #000000; font-size: 12pt;\">Cork (21)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 216px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Ireland (DST)</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px; width: 162px;\"><span style=\"color: #000000; font-size: 12pt;\">[353]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px; width: 175px;\"><span style=\"color: #000000; font-size: 12pt;\">Galway (91)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td style=\"height: 15px; text-align: left; width: 216px;\" height=\"20\"></td>\n" +
            "        <td style=\"text-align: left; height: 15px; width: 162px;\"></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px; width: 175px;\"><span style=\"color: #000000; font-size: 12pt;\">Limerick (61)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td style=\"height: 15px; text-align: left; width: 216px;\" height=\"20\"></td>\n" +
            "        <td style=\"text-align: left; height: 15px; width: 162px;\"></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px; width: 175px;\"><span style=\"color: #000000; font-size: 12pt;\">Waterford (51)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td style=\"height: 15px; text-align: left; width: 216px;\" height=\"20\"></td>\n" +
            "        <td style=\"text-align: left; height: 15px; width: 162px;\"></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px; width: 175px;\"><span style=\"color: #000000; font-size: 12pt;\">Jerusalem (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td style=\"height: 15px; text-align: left; width: 216px;\" height=\"20\"></td>\n" +
            "        <td style=\"text-align: left; height: 15px; width: 162px;\"></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px; width: 175px;\"><span style=\"color: #000000; font-size: 12pt;\">Haifa (4)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 216px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Israel (DST)</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px; width: 162px;\"><span style=\"color: #000000; font-size: 12pt;\">[972]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px; width: 175px;\"><span style=\"color: #000000; font-size: 12pt;\">Holon (3)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td style=\"height: 15px; text-align: left; width: 216px;\" height=\"20\"></td>\n" +
            "        <td style=\"text-align: left; height: 15px; width: 162px;\"></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px; width: 175px;\"><span style=\"color: #000000; font-size: 12pt;\">Petah Tikva (3)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td style=\"height: 15px; text-align: left; width: 216px;\" height=\"20\"></td>\n" +
            "        <td style=\"text-align: left; height: 15px; width: 162px;\"></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px; width: 175px;\"><span style=\"color: #000000; font-size: 12pt;\">Tel Aviv (3)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 48.75pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 48px; text-align: left; width: 216px;\" height=\"65\"><span style=\"color: #000000; font-size: 12pt;\">Italy (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"width: 162px; text-align: left; height: 48px;\" width=\"161\"><span style=\"color: #000000; font-size: 12pt;\">[39]</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">‘0’ plus area codes plus local numbers = new 9-digit national numbers.</span></td>\n" +
            "        <td class=\"xl69\" style=\"text-align: left; height: 48px; width: 175px;\"><span style=\"color: #000000; font-size: 12pt;\">Rome*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left; width: 216px;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Ivory Coast</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px; width: 162px;\"><span style=\"color: #000000; font-size: 12pt;\">[225]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px; width: 175px;\"><span style=\"color: #000000; font-size: 12pt;\">Yamoussoukro*Abidjan*</span></td>\n" +
            "      </tr>\n" +
            "      </tbody>\n" +
            "    </table>\n" +
            "  </div>\n" +
            "  <div class=\"kt-tab-content\" data-table-number=\"9\">\n" +
            "    <table style=\"border-collapse: collapse;\" border=\"1\" cellspacing=\"0\" cellpadding=\"0\">\n" +
            "      <tbody style=\"text-align: left;\">\n" +
            "      <tr style=\"height: 20px; background-color: #0156aa;\">\n" +
            "        <td width=\"215\" height=\"20\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">Country</span></strong></td>\n" +
            "        <td width=\"161\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">Code</span></strong></td>\n" +
            "        <td class=\"xl65\" style=\"width: 113pt; text-align: center;\" width=\"150\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">City/Area Code</span></strong></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 90pt; text-align: left;\" rowspan=\"6\" height=\"120\"><span style=\"color: #000000; font-size: 12pt;\">Jamaica</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"6\"><span style=\"color: #000000; font-size: 12pt;\">[1]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Kingston (876)**</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Tokyo (3)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Fukuoka (92)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Hiroshima (82)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Kobe (78)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Kyoto (75)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 105pt; text-align: left;\" rowspan=\"7\" height=\"140\"><span style=\"color: #000000; font-size: 12pt;\">Japan</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"7\"><span style=\"color: #000000; font-size: 12pt;\">[81]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Nagasaki (958)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Nagoya (52)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Osaka (66)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Sapporo (11)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Yamaguchi (839)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Yokohama (45)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Amman (6)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 30pt; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Jordan (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[962]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Irbid (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Zerqua (9)</span></td>\n" +
            "      </tr>\n" +
            "      </tbody>\n" +
            "    </table>\n" +
            "  </div>\n" +
            "  <div class=\"kt-tab-content\" data-table-number=\"10\">\n" +
            "    <table style=\"border-collapse: collapse;\" border=\"1\" cellspacing=\"5\" cellpadding=\"0\">\n" +
            "      <tbody style=\"text-align: left;\">\n" +
            "      <tr style=\"height: 20px; background-color: #0156aa;\">\n" +
            "        <td width=\"215\" height=\"20\"><strong><span style=\"font-size: 12pt; color: #ffffff;\">Country</span></strong></td>\n" +
            "        <td width=\"161\"><strong><span style=\"font-size: 12pt; color: #ffffff;\">Code</span></strong></td>\n" +
            "        <td width=\"150\"><strong><span style=\"font-size: 12pt; color: #ffffff;\">City/Area Code</span></strong></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 45pt; text-align: left;\" rowspan=\"3\" height=\"60\"><span style=\"color: #000000; font-size: 12pt;\">Kazakhstan(DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"3\"><span style=\"color: #000000; font-size: 12pt;\">[7]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Almaty (3272)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Chimkent (325)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Karaganda (3212)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 30pt; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Kenya</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[254]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Nairobi (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Mombasa (11)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 45pt; text-align: left;\" rowspan=\"3\" height=\"60\"><span style=\"color: #000000; font-size: 12pt;\">Korea, North</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"3\"><span style=\"color: #000000; font-size: 12pt;\">[850]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Pyongyang (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Seoul (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Cheju (64)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 60pt; text-align: left;\" rowspan=\"4\" height=\"80\"><span style=\"color: #000000; font-size: 12pt;\">Korea, South</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"4\"><span style=\"color: #000000; font-size: 12pt;\">[82]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Inchon (32)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Kwangju (62)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Pusan (51)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Taegu (53)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 30pt; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Kuwait</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[965]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Kuwait*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Bishkek (312)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 30pt; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Kyrgyzstan(DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[996]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Jalal-Abad (3722)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Osh (3222)</span></td>\n" +
            "      </tr>\n" +
            "      </tbody>\n" +
            "    </table>\n" +
            "  </div>\n" +
            "  <div class=\"kt-tab-content\" data-table-number=\"11\">\n" +
            "    <table style=\"border-collapse: collapse;\" border=\"1\" cellspacing=\"0\" cellpadding=\"0\">\n" +
            "      <tbody style=\"text-align: left;\">\n" +
            "      <tr style=\"height: 20px; background-color: #0156aa;\">\n" +
            "        <td class=\"xl65\" style=\"height: 15pt; width: 161pt; text-align: center;\" width=\"215\" height=\"20\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">Country</span></strong></td>\n" +
            "        <td class=\"xl65\" style=\"width: 121pt; text-align: center;\" width=\"161\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">Code</span></strong></td>\n" +
            "        <td class=\"xl65\" style=\"width: 113pt; text-align: center;\" width=\"150\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">City/Area Code</span></strong></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 45pt; text-align: left;\" rowspan=\"3\" height=\"60\"><span style=\"color: #000000; font-size: 12pt;\">Laos</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"3\"><span style=\"color: #000000; font-size: 12pt;\">[856]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Vientiane (21)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Luang Prabang (71)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Svannakhet (41)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 45pt; text-align: left;\" rowspan=\"3\" height=\"60\"><span style=\"color: #000000; font-size: 12pt;\">Latvia (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"3\"><span style=\"color: #000000; font-size: 12pt;\">[371]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Riga (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Daugavpils (54)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Liepaja (34)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 30pt; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Lebanon (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[961]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Beirut (1)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Tripoli (6)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Lesotho</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">[266]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Maseru*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 30pt; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Liberia</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[231]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Monrovia*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Tripoli (21)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 30pt; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Libya</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[218]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Benghazi (61)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Misratah (51)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Liechtenstein (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">[423]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Vaduz*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 48.75pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 48.75pt; text-align: left;\" height=\"65\"><span style=\"color: #000000; font-size: 12pt;\">Lithuania</span></td>\n" +
            "        <td class=\"xl68\" style=\"width: 121pt; text-align: left;\" width=\"161\"><span style=\"color: #000000; font-size: 12pt;\">[370]</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">By 2003, area codes plus local number = new 8-digit national numbers</span></td>\n" +
            "        <td style=\"text-align: left;\"></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Luxembourg (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">[352]</span></td>\n" +
            "        <td class=\"xl69\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Luxembourg*</span></td>\n" +
            "      </tr>\n" +
            "      </tbody>\n" +
            "    </table>\n" +
            "  </div>\n" +
            "  <div class=\"kt-tab-content\" data-table-number=\"12\">\n" +
            "    <table style=\"border-collapse: collapse;\" border=\"1\" cellspacing=\"0\" cellpadding=\"0\">\n" +
            "      <tbody style=\"text-align: left;\">\n" +
            "      <tr style=\"height: 20px; background-color: #0156aa;\">\n" +
            "        <td width=\"215\" height=\"20\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">Country</span></strong></td>\n" +
            "        <td width=\"161\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">Code</span></strong></td>\n" +
            "        <td width=\"150\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">City/Area Code</span></strong></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 24.75pt; text-align: left;\" height=\"33\"><span style=\"color: #000000; font-size: 12pt;\">Macau</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">[853]</span></td>\n" +
            "        <td class=\"xl68\" style=\"width: 113pt; text-align: left;\" width=\"150\"><span style=\"color: #000000; font-size: 12pt;\">Macau*</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(6-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Macedonia (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">[389]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Skopje (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 24.75pt; text-align: left;\" height=\"33\"><span style=\"color: #000000; font-size: 12pt;\">Madagascar</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">[261]</span></td>\n" +
            "        <td class=\"xl68\" style=\"width: 113pt; text-align: left;\" width=\"150\"><span style=\"color: #000000; font-size: 12pt;\">Antananarivo*</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(7-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 54.75pt; text-align: left;\" rowspan=\"3\" height=\"73\"><span style=\"color: #000000; font-size: 12pt;\">Malawi</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"3\"><span style=\"color: #000000; font-size: 12pt;\">[265]</span></td>\n" +
            "        <td class=\"xl68\" style=\"width: 113pt; text-align: left;\" width=\"150\"><span style=\"color: #000000; font-size: 12pt;\">Lilongwe*</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(6-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Kuala Lumpur (3)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Johor Bahru (7)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 45pt; text-align: left;\" rowspan=\"3\" height=\"60\"><span style=\"color: #000000; font-size: 12pt;\">Malaysia</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"3\"><span style=\"color: #000000; font-size: 12pt;\">[60]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Kota Bahru (9)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Melaka (6)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Penang (4)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 24.75pt; text-align: left;\" height=\"33\"><span style=\"color: #000000; font-size: 12pt;\">Maldives</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">[960]</span></td>\n" +
            "        <td class=\"xl68\" style=\"width: 113pt; text-align: left;\" width=\"150\"><span style=\"color: #000000; font-size: 12pt;\">Mal *</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(6-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 24.75pt; text-align: left;\" height=\"33\"><span style=\"color: #000000; font-size: 12pt;\">Mali</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">[223]</span></td>\n" +
            "        <td class=\"xl68\" style=\"width: 113pt; text-align: left;\" width=\"150\"><span style=\"color: #000000; font-size: 12pt;\">Bamako*</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(6-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 24.75pt; text-align: left;\" height=\"33\"><span style=\"color: #000000; font-size: 12pt;\">Malta (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">[356]</span></td>\n" +
            "        <td class=\"xl68\" style=\"width: 113pt; text-align: left;\" width=\"150\"><span style=\"color: #000000; font-size: 12pt;\">Valletta*</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(8-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 24.75pt; text-align: left;\" height=\"33\"><span style=\"color: #000000; font-size: 12pt;\">Marshall Islands</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">[692]</span></td>\n" +
            "        <td class=\"xl68\" style=\"width: 113pt; text-align: left;\" width=\"150\"><span style=\"color: #000000; font-size: 12pt;\">Majuro*</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(7-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 24.75pt; text-align: left;\" height=\"33\"><span style=\"color: #000000; font-size: 12pt;\">Martinique</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">[596]</span></td>\n" +
            "        <td class=\"xl68\" style=\"width: 113pt; text-align: left;\" width=\"150\"><span style=\"color: #000000; font-size: 12pt;\">Fort-De-France*</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(10-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 24.75pt; text-align: left;\" height=\"33\"><span style=\"color: #000000; font-size: 12pt;\">Mauritania</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">[222]</span></td>\n" +
            "        <td class=\"xl68\" style=\"width: 113pt; text-align: left;\" width=\"150\"><span style=\"color: #000000; font-size: 12pt;\">Nouakchott*</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(7-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 114.75pt; text-align: left;\" rowspan=\"7\" height=\"153\"><span style=\"color: #000000; font-size: 12pt;\">Mauritius</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"7\"><span style=\"color: #000000; font-size: 12pt;\">[230]</span></td>\n" +
            "        <td class=\"xl68\" style=\"width: 113pt; text-align: left;\" width=\"150\"><span style=\"color: #000000; font-size: 12pt;\">Port Louis*</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(7-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Mexico City (55)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Acapulco (744)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Cuidad Juarez (656)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Durango (618)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Ensenada (646)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Guadalajara (33)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 120pt; text-align: left;\" rowspan=\"8\" height=\"160\"><span style=\"color: #000000; font-size: 12pt;\">Mexico†† (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"8\"><span style=\"color: #000000; font-size: 12pt;\">[52]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Leon (477)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Mazatlan (669)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Mexicali (686)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Monterrey (81)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Nuevo Laredo (867)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Puebla (222)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Tijuana (664)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Veracruz (229)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Midway Islands</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">[808]</span></td>\n" +
            "        <td style=\"text-align: left;\"></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 30pt; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Moldova (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[373]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Kishinev (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Tiraspol (33)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Monaco (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">[377]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Monaco*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Mongolia (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">[976]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Ulan Bator (1)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 45pt; text-align: left;\" rowspan=\"3\" height=\"60\"><span style=\"color: #000000; font-size: 12pt;\">Montenegro &amp; Serbia (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"3\"><span style=\"color: #000000; font-size: 12pt;\">[381]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Belgrade (11)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Nis (18)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Novi Sad (21)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 54.75pt; text-align: left;\" rowspan=\"3\" height=\"73\"><span style=\"color: #000000; font-size: 12pt;\">Montserrat</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"3\"><span style=\"color: #000000; font-size: 12pt;\">[1]</span></td>\n" +
            "        <td class=\"xl68\" style=\"width: 113pt; text-align: left;\" width=\"150\"><span style=\"color: #000000; font-size: 12pt;\">Plymouth (664)**</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(7-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Rabat (3)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Casablanca (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 45pt; text-align: left;\" rowspan=\"3\" height=\"60\"><span style=\"color: #000000; font-size: 12pt;\">Morocco</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"3\"><span style=\"color: #000000; font-size: 12pt;\">[212]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Fez (5)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Marrakech (4)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Tangiers (3)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 30pt; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Mozambique</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[258]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Maputo (1)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Nampula (6)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 30pt; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Myanmar (Burma)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[95]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">J Yangon (1)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Mandalay (2)</span></td>\n" +
            "      </tr>\n" +
            "      </tbody>\n" +
            "    </table>\n" +
            "  </div>\n" +
            "  <div class=\"kt-tab-content\" data-table-number=\"13\">\n" +
            "    <table style=\"border-collapse: collapse;\" border=\"1\" cellspacing=\"0\" cellpadding=\"0\">\n" +
            "      <tbody style=\"text-align: left;\">\n" +
            "      <tr style=\"height: 20px; background-color: #0156aa;\">\n" +
            "        <td class=\"xl65\" style=\"height: 15pt; width: 161pt; text-align: center;\" width=\"215\" height=\"20\"><span style=\"color: #ffffff;\"><strong>Country</strong></span></td>\n" +
            "        <td class=\"xl65\" style=\"width: 121pt; text-align: center;\" width=\"161\"><span style=\"color: #ffffff;\"><strong>Code</strong></span></td>\n" +
            "        <td class=\"xl65\" style=\"width: 113pt; text-align: center;\" width=\"150\"><span style=\"color: #ffffff;\"><strong>City/Area Code</strong></span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Namibia (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">[264]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Windhoek (61)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 45pt; text-align: left;\" rowspan=\"3\" height=\"60\"><span style=\"color: #000000; font-size: 12pt;\">Nepal</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"3\"><span style=\"color: #000000; font-size: 12pt;\">[977]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Kathmandu (1)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Amsterdam (20)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">The Hague (70)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 45pt; text-align: left;\" rowspan=\"3\" height=\"60\"><span style=\"color: #000000; font-size: 12pt;\">Netherlands (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"3\"><span style=\"color: #000000; font-size: 12pt;\">[31]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Eindhoven (40)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Rotterdam (10)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Utrecht (30)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 30pt; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Netherlands Antilles</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[599]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Willemstad (9)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">St. Maarten (5)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15.75pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 30.75pt; text-align: left;\" rowspan=\"2\" height=\"41\"><span style=\"color: #000000; font-size: 12pt;\">New Caledonia</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[687]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Noum a*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Wellington (4)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 45pt; text-align: left;\" rowspan=\"3\" height=\"60\"><span style=\"color: #000000; font-size: 12pt;\">New Zealand (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"3\"><span style=\"color: #000000; font-size: 12pt;\">[64]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Auckland (9)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Christchurch (3)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Telecom Mobile Phones (25)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 30pt; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Nicaragua</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[505]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Managua (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Leon (311)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 54.75pt; text-align: left;\" rowspan=\"3\" height=\"73\"><span style=\"color: #000000; font-size: 12pt;\">Niger Republic</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"3\"><span style=\"color: #000000; font-size: 12pt;\">[227]</span></td>\n" +
            "        <td class=\"xl68\" style=\"width: 113pt; text-align: left;\" width=\"150\"><span style=\"color: #000000; font-size: 12pt;\">Niamey*</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(6-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Abuja (9)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Lagos (1)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 45pt; text-align: left;\" rowspan=\"3\" height=\"60\"><span style=\"color: #000000; font-size: 12pt;\">Nigeria</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"3\"><span style=\"color: #000000; font-size: 12pt;\">[234]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Ibadan (22)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Kano (64)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Cell Phones (90)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Northern Mariana Isl.</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">[1]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Saipan (670)**</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 24.75pt; text-align: left;\" height=\"33\"><span style=\"color: #000000; font-size: 12pt;\">Norway (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">[47]</span></td>\n" +
            "        <td class=\"xl68\" style=\"width: 113pt; text-align: left;\" width=\"150\"><span style=\"color: #000000; font-size: 12pt;\">Oslo*</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(8-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      </tbody>\n" +
            "    </table>\n" +
            "  </div>\n" +
            "  <div class=\"kt-tab-content\" data-table-number=\"14\">\n" +
            "    <table style=\"border-collapse: collapse;\" border=\"1\" cellspacing=\"0\" cellpadding=\"0\">\n" +
            "      <tbody>\n" +
            "      <tr style=\"height: 16px; background-color: #0156aa;\">\n" +
            "        <td class=\"xl65\" style=\"height: 16px; width: 161pt;\" align=\"left\" width=\"215\" height=\"20\"><span style=\"font-size: 12pt;\"><strong><span style=\"color: #ffffff;\">Country</span></strong></span></td>\n" +
            "        <td class=\"xl65\" style=\"width: 121pt; height: 16px;\" align=\"left\" width=\"161\"><span style=\"font-size: 12pt;\"><strong><span style=\"color: #ffffff;\">Code</span></strong></span></td>\n" +
            "        <td class=\"xl65\" style=\"width: 113pt; height: 16px;\" align=\"left\" width=\"150\"><span style=\"font-size: 12pt;\"><strong><span style=\"color: #ffffff;\">City/Area Code</span></strong></span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 14px;\">\n" +
            "        <td class=\"xl66\" style=\"height: 14px;\" align=\"left\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Oman</span></td>\n" +
            "        <td class=\"xl66\" style=\"height: 14px;\" align=\"left\"><span style=\"color: #000000; font-size: 12pt;\">[968]</span></td>\n" +
            "        <td class=\"xl66\" style=\"height: 14px;\" align=\"left\"><span style=\"color: #000000; font-size: 12pt;\">Muscat*</span></td>\n" +
            "      </tr>\n" +
            "      </tbody>\n" +
            "    </table>\n" +
            "  </div>\n" +
            "  <div class=\"kt-tab-content\" data-table-number=\"15\">\n" +
            "    <table style=\"border-collapse: collapse;\" border=\"1\" cellspacing=\"0\" cellpadding=\"0\">\n" +
            "      <tbody style=\"text-align: left;\">\n" +
            "      <tr style=\"height: 20px; background-color: #0156aa;\">\n" +
            "        <td width=\"215\" height=\"20\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">Country</span></strong></td>\n" +
            "        <td width=\"161\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">Code</span></strong></td>\n" +
            "        <td width=\"150\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">City/Area Code</span></strong></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 84px; text-align: left;\" rowspan=\"5\" height=\"100\"><span style=\"color: #000000; font-size: 12pt;\">Pakistan (DST)</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 84px;\" rowspan=\"5\"><span style=\"color: #000000; font-size: 12pt;\">[92]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Islamabad (51)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Faisalabad (41)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Karachi (21)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Lahore (42)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Rawalpindi (51)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Palau</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[680]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Koror*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 39px; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Panama</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[507]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Panama City*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">(7-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Papua New Guinea</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[675]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Port Moresby*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 39px; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Paraguay (DST)</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[595]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Asuncion (21)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Lima (1)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 69px; text-align: left;\" rowspan=\"4\" height=\"80\"><span style=\"color: #000000; font-size: 12pt;\">Peru</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 69px;\" rowspan=\"4\"><span style=\"color: #000000; font-size: 12pt;\">[51]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Arequipa (54)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Callao (1)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Trujillo (44)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Manila (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 69px; text-align: left;\" rowspan=\"4\" height=\"80\"><span style=\"color: #000000; font-size: 12pt;\">Philippines</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 69px;\" rowspan=\"4\"><span style=\"color: #000000; font-size: 12pt;\">[63]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Cebu (32)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Davao (82)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Quezon City (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Warsaw (22)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 39px; text-align: left;\" rowspan=\"2\" height=\"41\"><span style=\"color: #000000; font-size: 12pt;\">Poland (DST)</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">[48]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Gdansk (58)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15.75pt; text-align: left;\">\n" +
            "        <td style=\"height: 15px; text-align: left;\" height=\"21\"></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Krak๓w (12)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td style=\"height: 15px; text-align: left;\" height=\"20\"></td>\n" +
            "        <td style=\"text-align: left; height: 15px;\"></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Lodz (42)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 48.75pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 48px; text-align: left;\" height=\"65\"><span style=\"color: #000000; font-size: 12pt;\">Portugal (DST)</span></td>\n" +
            "        <td class=\"xl69\" style=\"width: 121pt; text-align: left; height: 48px;\" width=\"161\"><span style=\"color: #000000; font-size: 12pt;\">[351]</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">Are a codes plus local numbers to make uniform 9-digit national numbers.</span></td>\n" +
            "        <td style=\"text-align: left; height: 48px;\"></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Puerto Rico</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[1]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">San Juan (787)**</span></td>\n" +
            "      </tr>\n" +
            "      </tbody>\n" +
            "    </table>\n" +
            "  </div>\n" +
            "  <div class=\"kt-tab-content\" data-table-number=\"16\">\n" +
            "    <table style=\"border-collapse: collapse;\" border=\"1\" cellspacing=\"5\" cellpadding=\"0\">\n" +
            "      <tbody style=\"text-align: left;\">\n" +
            "      <tr style=\"height: 20px; background-color: #0156aa;\">\n" +
            "        <td width=\"215\" height=\"20\"><span style=\"font-size: 12pt;\"><strong><span style=\"color: #ffffff;\">Country</span></strong></span></td>\n" +
            "        <td width=\"161\"><span style=\"font-size: 12pt;\"><strong><span style=\"color: #ffffff;\">Code</span></strong></span></td>\n" +
            "        <td class=\"xl65\" style=\"width: 113pt; text-align: center;\" width=\"150\"><span style=\"font-size: 12pt;\"><strong><span style=\"color: #ffffff;\">City/Area Code</span></strong></span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Qatar</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">[974]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Doha*</span></td>\n" +
            "      </tr>\n" +
            "      </tbody>\n" +
            "    </table>\n" +
            "  </div>\n" +
            "  <div class=\"kt-tab-content\" data-table-number=\"17\">\n" +
            "    <table style=\"border-collapse: collapse;\" border=\"1\" cellspacing=\"0\" cellpadding=\"0\">\n" +
            "      <tbody style=\"text-align: left;\">\n" +
            "      <tr style=\"height: 20px; background-color: #0156aa;\">\n" +
            "        <td class=\"xl65\" style=\"height: 15pt; width: 161pt; text-align: center;\" width=\"215\" height=\"20\"><span style=\"color: #ffffff; font-size: 12pt;\"><strong>Country</strong></span></td>\n" +
            "        <td class=\"xl65\" style=\"width: 121pt; text-align: center;\" width=\"161\"><span style=\"color: #ffffff; font-size: 12pt;\"><strong>Code</strong></span></td>\n" +
            "        <td class=\"xl65\" style=\"width: 113pt; text-align: center;\" width=\"150\"><span style=\"color: #ffffff; font-size: 12pt;\"><strong>City/Area Code</strong></span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 39.75pt; text-align: left;\" rowspan=\"2\" height=\"53\"><span style=\"color: #000000; font-size: 12pt;\">Reunion Island</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[262]</span></td>\n" +
            "        <td class=\"xl68\" style=\"width: 113pt; text-align: left;\" width=\"150\"><span style=\"color: #000000; font-size: 12pt;\">St. Denis*</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(10-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Bucharest (21)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 60pt; text-align: left;\" rowspan=\"4\" height=\"80\"><span style=\"color: #000000; font-size: 12pt;\">Romania (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"4\"><span style=\"color: #000000; font-size: 12pt;\">[40]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Constanta (241)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Iasi (232)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Moscow (095)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">&amp; mobile (096)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 45pt; text-align: left;\" rowspan=\"3\" height=\"60\"><span style=\"color: #000000; font-size: 12pt;\">Russia†† (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"3\"><span style=\"color: #000000; font-size: 12pt;\">[7]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Novgorod (816)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Novosibirsk (3832)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">St. Petersburg (812)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Rwanda</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">[250]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Kigali*</span></td>\n" +
            "      </tr>\n" +
            "      </tbody>\n" +
            "    </table>\n" +
            "  </div>\n" +
            "  <div class=\"kt-tab-content\" data-table-number=\"18\">\n" +
            "    <table style=\"border-collapse: collapse;\" border=\"1\" cellspacing=\"5\" cellpadding=\"0\">\n" +
            "      <tbody style=\"text-align: left;\">\n" +
            "      <tr style=\"height: 15px; background-color: #0156aa;\">\n" +
            "        <td width=\"215\" height=\"20\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">Country</span></strong></td>\n" +
            "        <td width=\"161\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">Code</span></strong></td>\n" +
            "        <td width=\"150\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">City/Area Code</span></strong></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15px; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">San Marino (DST)</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[378]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">San Marino*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15px; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 15px; text-align: left;\" height=\"21\"><span style=\"color: #000000; font-size: 12pt;\">Sใo Tom &amp; Principe</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[239]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Sใo Tom *</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15px; text-align: left;\">\n" +
            "        <td class=\"xl69\" style=\"height: 15px; text-align: left;\" height=\"20\"></td>\n" +
            "        <td class=\"xl69\" style=\"text-align: left; height: 15px;\"></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Riyadh (1)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15px; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Saudi Arabia</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[966]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Jeddah (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15px; text-align: left;\">\n" +
            "        <td class=\"xl69\" style=\"height: 15px; text-align: left;\" height=\"20\"></td>\n" +
            "        <td class=\"xl69\" style=\"text-align: left; height: 15px;\"></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Makkah (Mecca) (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24px; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 24px; text-align: left;\" height=\"33\"><span style=\"color: #000000; font-size: 12pt;\">Senegal</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">[221]</span></td>\n" +
            "        <td class=\"xl70\" style=\"width: 113pt; text-align: left; height: 24px;\" width=\"150\"><span style=\"color: #000000; font-size: 12pt;\">Dakar*</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(7-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24px; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 24px; text-align: left;\" height=\"33\"><span style=\"color: #000000; font-size: 12pt;\">Seychelles</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">[248]</span></td>\n" +
            "        <td class=\"xl70\" style=\"width: 113pt; text-align: left; height: 24px;\" width=\"150\"><span style=\"color: #000000; font-size: 12pt;\">Victoria</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(6-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15px; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Sierra Leone</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[232]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Freetown (22)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24px; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 24px; text-align: left;\" height=\"33\"><span style=\"color: #000000; font-size: 12pt;\">Singapore</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">[65]</span></td>\n" +
            "        <td class=\"xl70\" style=\"width: 113pt; text-align: left; height: 24px;\" width=\"150\"><span style=\"color: #000000; font-size: 12pt;\">Singapore*</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(8-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24px; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 39px; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Slovak Republic (DST)</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[421]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Bratislava (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15px; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Kosice (55)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24px; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 39px; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Slovenia (DST)</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[386]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Ljubljana (1)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15px; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Maribor (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15px; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Solomon Islands</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[677]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Honiara*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15px; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Somalia</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[252]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Mogadishu (1)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 48px; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 48px; text-align: left;\" height=\"65\"><span style=\"color: #000000; font-size: 12pt;\">South Africa</span></td>\n" +
            "        <td class=\"xl70\" style=\"width: 121pt; text-align: left; height: 48px;\" width=\"161\"><span style=\"color: #000000; font-size: 12pt;\">[27]</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">Area codes plus local numbers = new 9 – digit national digit national numbers.</span></td>\n" +
            "        <td class=\"xl71\" style=\"text-align: left; height: 48px;\"><span style=\"color: #000000; font-size: 12pt;\">Cape Town*Pretoria</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 48px; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 48px; text-align: left;\" height=\"65\"><span style=\"color: #000000; font-size: 12pt;\">Spain (DST)</span></td>\n" +
            "        <td class=\"xl70\" style=\"width: 121pt; text-align: left; height: 48px;\" width=\"161\"><span style=\"color: #000000; font-size: 12pt;\">[34] </span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">Area codes plus local numbers = new 9 – digit national numbers.</span></td>\n" +
            "        <td class=\"xl71\" style=\"text-align: left; height: 48px;\"><span style=\"color: #000000; font-size: 12pt;\">Madrid*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15px; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Sri Lanka</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[94]</span></td>\n" +
            "        <td class=\"xl71\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Colombo (1)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15px; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">St. Kitts &amp; Nevis</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[1]</span></td>\n" +
            "        <td class=\"xl71\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Basseterre (869)**</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15px; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">St. Lucia</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[1]</span></td>\n" +
            "        <td class=\"xl71\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Castries (758)**</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24px; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 39px; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">St. Vincents &amp; Grenadines</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[1]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Kingstown (784)**</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15px; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Khartoum (11)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24px; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 39px; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Sudan</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[249]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Omdurman (11)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15px; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Port Sudan (311)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15px; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Suriname</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[597]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Paramaribo*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24px; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 54px; text-align: left;\" rowspan=\"3\" height=\"60\"><span style=\"color: #000000; font-size: 12pt;\">Swaziland</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 54px;\" rowspan=\"3\"><span style=\"color: #000000; font-size: 12pt;\">[268]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Mbabane*Lobamba*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15px; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Stockholm (8)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15px; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Goteberg (31)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24px; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 39px; text-align: left;\" rowspan=\"2\" height=\"41\"><span style=\"color: #000000; font-size: 12pt;\">Sweden (DST)</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[46]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Malm๖ (40)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15px; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Uppsala (18)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 48px; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 48px; text-align: left;\" height=\"65\"><span style=\"color: #000000; font-size: 12pt;\">Switzerland (DST)</span></td>\n" +
            "        <td class=\"xl70\" style=\"width: 121pt; text-align: left; height: 48px;\" width=\"161\"><span style=\"color: #000000; font-size: 12pt;\">[41]</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">As of March 2002, area codes plus local numbers = new national numbers.</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 48px;\"><span style=\"color: #000000; font-size: 12pt;\">Bern*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24px; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 39px; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Syria (DST)</span></td>\n" +
            "        <td class=\"xl68\" style=\"text-align: left; height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[963]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Damascus (11)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15px; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Aleppo (21)</span></td>\n" +
            "      </tr>\n" +
            "      </tbody>\n" +
            "    </table>\n" +
            "  </div>\n" +
            "  <div class=\"kt-tab-content\" data-table-number=\"19\">\n" +
            "    <table style=\"border-collapse: collapse;\" border=\"1\" cellspacing=\"5\" cellpadding=\"0\">\n" +
            "      <tbody style=\"text-align: left;\">\n" +
            "      <tr style=\"height: 20px; background-color: #0156aa;\">\n" +
            "        <td class=\"xl65\" style=\"height: 15px; width: 161pt; text-align: center;\" width=\"215\" height=\"20\"><span style=\"color: #ffffff;\"><strong>Country</strong></span></td>\n" +
            "        <td class=\"xl65\" style=\"width: 121pt; text-align: center; height: 15px;\" width=\"161\"><span style=\"color: #ffffff;\"><strong>Code</strong></span></td>\n" +
            "        <td class=\"xl65\" style=\"width: 113pt; text-align: center; height: 15px;\" width=\"150\"><span style=\"color: #ffffff;\"><strong>City/Area Code</strong></span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 69px; text-align: left;\" rowspan=\"4\" height=\"80\"><span style=\"color: #000000; font-size: 12pt;\">Taiwan</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 69px;\" rowspan=\"4\"><span style=\"color: #000000; font-size: 12pt;\">[886]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Taipei (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Kaohsiung (7)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Taichung (4)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Tainan (6)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 39px; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Tajikistan</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[992]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Dushanbe (37)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Khujand (34)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 39px; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Tanzania</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 39px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[255]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Dar es Salaam (22)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Dodoma (26)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 52.5pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 52px; text-align: left;\" height=\"70\"><span style=\"color: #000000; font-size: 12pt;\">Thailand</span></td>\n" +
            "        <td class=\"xl68\" style=\"width: 121pt; text-align: left; height: 52px;\" width=\"161\"><span style=\"color: #000000; font-size: 12pt;\">[66]</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">Area codes plus local numbers = new 8 – digit national numbers.</span></td>\n" +
            "        <td class=\"xl70\" style=\"text-align: left; height: 52px;\"><span style=\"color: #000000; font-size: 12pt;\">Bangkok*</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 24px; text-align: left;\" height=\"33\"><span style=\"color: #000000; font-size: 12pt;\">Togo</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">[228]</span></td>\n" +
            "        <td class=\"xl69\" style=\"width: 113pt; text-align: left; height: 24px;\" width=\"150\"><span style=\"color: #000000; font-size: 12pt;\">Lom *</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(7-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Tonga</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[676]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Nukualofa**</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 63px; text-align: left;\" rowspan=\"2\" height=\"53\"><span style=\"color: #000000; font-size: 12pt;\">Trinidad &amp; Tobago</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 63px;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[1]</span></td>\n" +
            "        <td class=\"xl69\" style=\"width: 113pt; text-align: left; height: 48px;\" width=\"150\"><span style=\"color: #000000; font-size: 12pt;\">Port-of-Spain (868)**</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(7-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Tunis (1)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 69px; text-align: left;\" rowspan=\"4\" height=\"80\"><span style=\"color: #000000; font-size: 12pt;\">Tunisia</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 69px;\" rowspan=\"4\"><span style=\"color: #000000; font-size: 12pt;\">[216]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Ariana (1)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Sfax (4)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Ankara (312)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Istanbul (212), (216)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 54px; text-align: left;\" rowspan=\"3\" height=\"60\"><span style=\"color: #000000; font-size: 12pt;\">Turkey (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 54px;\" rowspan=\"3\"><span style=\"color: #000000; font-size: 12pt;\">[90]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">Adana (322)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Bursa (224)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Izmir (232)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Turkmenistan</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[993]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Ashgabat (12)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Turks &amp; Caicos Islands (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[1]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Grand Turk (649)**</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 24px; text-align: left;\" height=\"33\"><span style=\"color: #000000; font-size: 12pt;\">Tuvalu</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left; height: 24px;\"><span style=\"color: #000000; font-size: 12pt;\">[688]</span></td>\n" +
            "        <td class=\"xl69\" style=\"width: 113pt; text-align: left; height: 24px;\" width=\"150\"><span style=\"color: #000000; font-size: 12pt;\">Funafuti* </span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(5-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      </tbody>\n" +
            "    </table>\n" +
            "  </div>\n" +
            "  <div class=\"kt-tab-content\" data-table-number=\"20\">\n" +
            "    <table style=\"border-collapse: collapse;\" border=\"1\" cellspacing=\"5\" cellpadding=\"0\">\n" +
            "      <tbody style=\"text-align: left;\">\n" +
            "      <tr style=\"height: 20px; background-color: #0156aa;\">\n" +
            "        <td class=\"xl65\" style=\"height: 15pt; width: 161pt; text-align: center;\" width=\"215\" height=\"20\"><span style=\"color: #ffffff;\"><strong>Country</strong></span></td>\n" +
            "        <td class=\"xl65\" style=\"width: 121pt; text-align: center;\" width=\"161\"><span style=\"color: #ffffff;\"><strong>Code</strong></span></td>\n" +
            "        <td class=\"xl65\" style=\"width: 113pt; text-align: center;\" width=\"150\"><span style=\"color: #ffffff;\"><strong>City/Area Code</strong></span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Uganda</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">[256]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Kampala (41)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 75.75pt; text-align: left;\" rowspan=\"2\" height=\"101\"><span style=\"color: #000000; font-size: 12pt;\">Ukraine (DST)</span></td>\n" +
            "        <td class=\"xl70\" style=\"width: 121pt; text-align: left;\" rowspan=\"2\" width=\"161\"><span style=\"color: #000000; font-size: 12pt;\">[380]</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">In addition to the trunk prefix ‘8’, long – distance calls within Ukraine add the prefix ‘0’ to the area code (e.g., 8 (044) + number for Kiev)</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Kiev (44)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 60.75pt; text-align: left;\">\n" +
            "        <td class=\"xl68\" style=\"height: 60.75pt; text-align: left;\" height=\"81\"><span style=\"color: #000000; font-size: 12pt;\">Odessa (48)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 90pt; text-align: left;\" rowspan=\"6\" height=\"120\"><span style=\"color: #000000; font-size: 12pt;\">United Arab Emirates</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"6\"><span style=\"color: #000000; font-size: 12pt;\">[971]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Abu Dhabi (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Dubai (4)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">London (20)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Belfast (1232)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Birmingham (121)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Bristol (117)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 270pt; text-align: left;\" rowspan=\"18\" height=\"360\"><span style=\"color: #000000; font-size: 12pt;\">United Kingdom (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"18\"><span style=\"color: #000000; font-size: 12pt;\">[44]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Edinburgh (131)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Glasgow (141)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Leeds (113)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Liverpool (151)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Manchester (161)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Sheffield (114)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Washington, DC(202)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Atlanta (404)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Baltimore (410)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Boston (617)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Chicago (312) (773)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Cleveland (216)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Dallas (214) (972)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Denver (303)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Detroit (313)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Honolulu (808)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Houston (713) (281)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Los Angeles (213) &amp;(310)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 210pt; text-align: left;\" rowspan=\"14\" height=\"280\"><span style=\"color: #000000; font-size: 12pt;\">United States†† (DST)</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"14\"><span style=\"color: #000000; font-size: 12pt;\">[1]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Miami (305)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Minneapolis (612)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">New Orleans (504)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">New York (212), (718)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Philadelphia (215) &amp;(610)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Phoenix (602)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Sacramento (916) &amp;(530)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">St. Louis (314)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Salt Lake City (801)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">San Antonio (210)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">San Diego (619)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">San Francisco (415)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">San Jose (408)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Seattle (206)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 30pt; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Uruguay</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[598]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Montevideo (2)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Tashkent (71)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 30pt; text-align: left;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Uzbekistan</span></td>\n" +
            "        <td class=\"xl67\" style=\"text-align: left;\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[998]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Namangan (69)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Samarkandy (66)</span></td>\n" +
            "      </tr>\n" +
            "      </tbody>\n" +
            "    </table>\n" +
            "  </div>\n" +
            "  <div class=\"kt-tab-content\" data-table-number=\"21\">\n" +
            "    <table style=\"border-collapse: collapse;\" border=\"1\" cellspacing=\"0\" cellpadding=\"0\">\n" +
            "      <tbody style=\"text-align: left;\">\n" +
            "      <tr style=\"height: 20px; background-color: #0156aa;\">\n" +
            "        <td width=\"215\" height=\"20\"><span style=\"font-size: 12pt;\"><strong><span style=\"color: #ffffff;\">Country</span></strong></span></td>\n" +
            "        <td width=\"161\"><span style=\"font-size: 12pt;\"><strong><span style=\"color: #ffffff;\">Code</span></strong></span></td>\n" +
            "        <td width=\"150\"><span style=\"font-size: 12pt;\"><strong><span style=\"color: #ffffff;\">City/Area Code</span></strong></span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 24.75pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 39.75pt;\" rowspan=\"2\" height=\"53\"><span style=\"color: #000000; font-size: 12pt;\">Vanuatu</span></td>\n" +
            "        <td class=\"xl67\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[678]</span></td>\n" +
            "        <td class=\"xl68\" style=\"width: 113pt;\" width=\"150\"><span style=\"color: #000000; font-size: 12pt;\">Port Vila*</span><br>\n" +
            "          <span style=\"color: #000000; font-size: 12pt;\">(5-digit numbers)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Caracas ( 212)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 30pt;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Venezuela</span></td>\n" +
            "        <td class=\"xl67\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[58]</span></td>\n" +
            "        <td class=\"xl66\"><span style=\"color: #000000; font-size: 12pt;\">Maracaibo (261)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Valencia (241)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 30pt;\" rowspan=\"2\" height=\"40\"><span style=\"color: #000000; font-size: 12pt;\">Vietnam</span></td>\n" +
            "        <td class=\"xl67\" rowspan=\"2\"><span style=\"color: #000000; font-size: 12pt;\">[84]</span></td>\n" +
            "        <td class=\"xl66\"><span style=\"color: #000000; font-size: 12pt;\">Hanoi (4)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Ho Chi Minh City (8)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15pt;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Virgin Islands, British</span></td>\n" +
            "        <td class=\"xl67\"><span style=\"color: #000000; font-size: 12pt;\">[1]</span></td>\n" +
            "        <td class=\"xl66\"><span style=\"color: #000000; font-size: 12pt;\">Road Town (284)**</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl67\" style=\"height: 15pt;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Virgin Islands, U.S.</span></td>\n" +
            "        <td class=\"xl67\"><span style=\"color: #000000; font-size: 12pt;\">[1]</span></td>\n" +
            "        <td class=\"xl66\"><span style=\"color: #000000; font-size: 12pt;\">Charlotte Amalie (340)**</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td style=\"height: 15pt;\" height=\"20\"></td>\n" +
            "        <td></td>\n" +
            "        <td class=\"xl66\"><span style=\"color: #000000; font-size: 12pt;\">St. Thomas (340)</span></td>\n" +
            "      </tr>\n" +
            "      </tbody>\n" +
            "    </table>\n" +
            "  </div>\n" +
            "  <div class=\"kt-tab-content\" data-table-number=\"22\">\n" +
            "    <table style=\"border-collapse: collapse;\" border=\"1\" cellspacing=\"0\" cellpadding=\"0\">\n" +
            "      <tbody style=\"text-align: left;\">\n" +
            "      <tr style=\"height: 20px; background-color: #0156aa;\">\n" +
            "        <td class=\"xl65\" style=\"height: 15pt; width: 161pt; text-align: center;\" width=\"215\" height=\"20\"><span style=\"color: #ffffff;\"><strong>Country</strong></span></td>\n" +
            "        <td class=\"xl65\" style=\"width: 121pt; text-align: center;\" width=\"161\"><span style=\"color: #ffffff;\"><strong>Code</strong></span></td>\n" +
            "        <td class=\"xl65\" style=\"width: 113pt; text-align: center;\" width=\"150\"><span style=\"color: #ffffff;\"><strong>City/Area Code</strong></span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15pt; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15pt; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Western Samoa</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">[685]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left;\"><span style=\"color: #000000; font-size: 12pt;\">Apia*</span></td>\n" +
            "      </tr>\n" +
            "      </tbody>\n" +
            "    </table>\n" +
            "  </div>\n" +
            "  <div class=\"kt-tab-content\" data-table-number=\"23\">\n" +
            "    <table style=\"border-collapse: collapse;\" border=\"1\" cellspacing=\"5\" cellpadding=\"0\">\n" +
            "      <tbody style=\"text-align: left;\">\n" +
            "      <tr style=\"height: 15px; background-color: #0156aa;\">\n" +
            "        <td width=\"215\" height=\"20\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">Country</span></strong></td>\n" +
            "        <td width=\"161\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">Code</span></strong></td>\n" +
            "        <td class=\"xl65\" style=\"width: 113pt; text-align: center; height: 15px;\" width=\"150\"><strong><span style=\"color: #ffffff; font-size: 12pt;\">City/Area Code</span></strong></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 14px; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 14px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Yemen</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 14px;\"><span style=\"color: #000000; font-size: 12pt;\">[967]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 14px;\"><span style=\"color: #000000; font-size: 12pt;\">Sana’a (1)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15px; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"color: #000000; font-size: 12pt;\">Yugoslavia</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">[381]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"color: #000000; font-size: 12pt;\">Belgrade (11)</span></td>\n" +
            "      </tr>\n" +
            "      </tbody>\n" +
            "    </table>\n" +
            "  </div>\n" +
            "  <div class=\"kt-tab-content\" data-table-number=\"24\">\n" +
            "    <table style=\"border-collapse: collapse;\" border=\"1\" cellspacing=\"5\" cellpadding=\"0\">\n" +
            "      <tbody style=\"text-align: left;\">\n" +
            "      <tr style=\"height: 20px; background-color: #0156aa;\">\n" +
            "        <td class=\"xl65\" style=\"height: 20px; width: 215px; background-color: #0156aa; text-align: center;\"><span style=\"color: #ffffff;\"><strong>Country</strong></span></td>\n" +
            "        <td class=\"xl65\" style=\"width: 121pt; text-align: center; height: 20px;\" width=\"161\"><span style=\"color: #ffffff;\"><strong>Code</strong></span></td>\n" +
            "        <td class=\"xl65\" style=\"width: 113pt; text-align: center; height: 20px;\" width=\"150\"><span style=\"color: #ffffff;\"><strong>City/Area Code</strong></span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15px; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"font-size: 12pt; color: #000000;\">Zaire††</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"font-size: 12pt; color: #000000;\">[243]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"font-size: 12pt; color: #000000;\">Kinshasa (12)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15px; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"font-size: 12pt; color: #000000;\">Zambia</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"font-size: 12pt; color: #000000;\">[260]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"font-size: 12pt; color: #000000;\">Lusaka (1)</span></td>\n" +
            "      </tr>\n" +
            "      <tr style=\"height: 15px; text-align: left;\">\n" +
            "        <td class=\"xl66\" style=\"height: 15px; text-align: left;\" height=\"20\"><span style=\"font-size: 12pt; color: #000000;\">Zimbabwe</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"font-size: 12pt; color: #000000;\">[263]</span></td>\n" +
            "        <td class=\"xl66\" style=\"text-align: left; height: 15px;\"><span style=\"font-size: 12pt; color: #000000;\">Harare(4)</span></td>\n" +
            "      </tr>\n" +
            "      </tbody>\n" +
            "    </table>\n" +
            "  </div>\n" +
            "</div>";
    }else if (jQuery("#kt-tabs-currency").length != 0) {
        html = "\t\t\t\t<div class=\"kt-tabs\">\n" +
            "\t\t\t\t<ul class=\"kt-tabs-control\">\n" +
            "\t\t\t\t\t<li><span data-table-number=\"0\" onclick=\"switchTable(event)\">[A-B]</span></li>\n" +
            "\t\t\t\t\t<li><span data-table-number=\"1\" onclick=\"switchTable(event)\">[C-F]</span></li>\n" +
            "\t\t\t\t\t<li><span data-table-number=\"2\" onclick=\"switchTable(event)\">[G-K]</span></li>\n" +
            "\t\t\t\t\t<li><span data-table-number=\"3\" onclick=\"switchTable(event)\">[L-O]</span></li>\n" +
            "\t\t\t\t\t<li><span data-table-number=\"4\" onclick=\"switchTable(event)\">[P-S]</span></li>\n" +
            "\t\t\t\t\t<li><span data-table-number=\"5\" onclick=\"switchTable(event)\">[T-Z]</span></li>\n" +
            "\t\t\t\t</ul>\n" +
            "\t\t\t\t<div class=\"kt-tab-content\" data-table-number=\"0\">\n" +
            "\t\t\t\t\t<h4><span style=\"font-size: 14pt; color: #000000;\"><strong>Tên quốc gia (A &#8211; B):</strong></span></h4>\n" +
            "\t\t\t\t\t<table class=\"tablesorter\" style=\"border-style: solid;\" border=\"1\" frame=\"void\" cellspacing=\"0\" cellpadding=\"1\">\n" +
            "\t\t\t\t\t\t<thead>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<th style=\"width: 257.95px;\"><span style=\"color: #000000;\">Country</span></th>\n" +
            "\t\t\t\t\t\t\t<th style=\"width: 156.533px;\"><span style=\"color: #000000;\">Currency</span></th>\n" +
            "\t\t\t\t\t\t\t<th style=\"width: 123.567px;\"><span style=\"color: #000000;\">Alphabetic code</span></th>\n" +
            "\t\t\t\t\t\t\t<th style=\"width: 105.817px;\"><span style=\"color: #000000;\">Numeric code</span></th>\n" +
            "\t\t\t\t\t\t\t<th style=\"width: 57.7833px;\"><span style=\"color: #000000;\">Symbol</span></th>\n" +
            "\t\t\t\t\t\t\t<th style=\"width: 185.067px;\"><span style=\"color: #000000;\">Subdivision</span></th>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t</thead>\n" +
            "\t\t\t\t\t\t<tfoot></tfoot>\n" +
            "\t\t\t\t\t\t<tbody>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Afghanistan</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">Afghani</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">AFA</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">4</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">Af</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 puls</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Albania</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">Lek</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">ALL</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">8</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">L</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 qindarka (qintars)</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Algeria</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">Algerian Dinar</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">DZD</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">12</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">DA</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 centimes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">American Samoa</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">US Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">USD</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">840</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">$</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Andorra</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">Euro</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">EUR</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">978</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">€</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 euro-cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Angola</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">New Kwanza</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">AON</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">24</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">Kz</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 lwei</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Anguilla</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">East Caribbean Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">XCD</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">951</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">EC$</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Antarctica</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">No universal currency</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Antigua and Barbuda</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">East Caribbean Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">XCD</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">951</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">EC$</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Argentina</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">Argentine Peso</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">ARS</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">32</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">$</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 centavos</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Armenia</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">Armenian Dram</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">AMD</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">51</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 luma</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Aruba</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">Aruban Guilder</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">AWG</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">533</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">Af.</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Australia</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">Australian Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">AUD</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">36</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">A$</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Austria</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">Euro</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">EUR</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">978</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">€</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 euro-cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Azerbaijan</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">Azerbaijanian Manat</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">AZM</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">31</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 gopik</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Bahamas</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">Bahamian Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">BSD</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">44</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">B$</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Bahrain</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">Bahraini Dinar</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">BHD</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">48</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">BD</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">1000 fils</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Bangladesh</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">Taka</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">BDT</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">50</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">Tk</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 paisa (poisha)</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Barbados</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">Barbados Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">BBD</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">52</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">Bds$</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Belarus</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">Belarussian Ruble</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">BYR</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">974</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">BR</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Belgium</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">Euro</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">EUR</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">978</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">€</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 euro-cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Belize</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">Belize Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">BZD</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">84</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">BZ$</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Benin</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">CFA Franc BCEAO</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">XOF</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">952</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">CFAF</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 centimes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Bermuda</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">Bermudian Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">BMD</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">60</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">Bd$</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Bhutan</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">Ngultrum</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">BTN</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">64</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">Nu</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 chetrum</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Bhutan (other)</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">Indian Rupee</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">INR</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">356</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">Rs</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 paise</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Bosnia and Herzegovina</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">Convertible Marks</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">BAM</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">977</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">KM</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 fennig</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Botswana</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">Pula</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">BWP</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">72</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">P</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 thebe</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Bouvet Island</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">Norwegian Krone</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">NOK</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">578</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">NKr</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 øre</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Brazil</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">Brazilian Real</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">BRL</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">986</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">R$</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 centavos</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">British Indian Ocean Territory</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">Pound Sterling</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">GBP</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">826</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">£</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 pence</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">British Indian Ocean Territory (other)</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">US Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">USD</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">840</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">$</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Brunei Darussalam</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">Brunei Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">BND</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">96</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">B$</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 sen (a.k.a. 100 cents)</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Bulgaria</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">Lev</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">BGL</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">100</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">Lv</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 stotinki</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Burkina Faso</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">CFA Franc BCEAO</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">XOF</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">952</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">CFAF</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 centimes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 257.95px;\"><span style=\"color: #000000;\">Burundi</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 156.533px;\"><span style=\"color: #000000;\">Burundi Franc</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 123.567px;\"><span style=\"color: #000000;\">BIF</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 105.817px;\"><span style=\"color: #000000;\">108</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 57.7833px;\"><span style=\"color: #000000;\">FBu</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"width: 185.067px;\"><span style=\"color: #000000;\">100 centimes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t</tbody>\n" +
            "\t\t\t\t\t</table>\n" +
            "\t\t\t\t</div>\n" +
            "\t\t\t\t<div class=\"kt-tab-content\" data-table-number=\"1\">\n" +
            "\t\t\t\t\t<h4><span style=\"font-size: 14pt;\"><strong>Tên quốc gia (C &#8211; F):</strong></span></h4>\n" +
            "\t\t\t\t\t<table  class=\"tablesorter\" style=\"height: 1080px;\" border=\"1\" cellspacing=\"0\" cellpadding=\"1\">\n" +
            "\t\t\t\t\t\t<thead>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<th style=\"height: 24px;\"><span style=\"color: #000000;\">Country</span></th>\n" +
            "\t\t\t\t\t\t\t<th style=\"height: 24px;\"><span style=\"color: #000000;\">Currency</span></th>\n" +
            "\t\t\t\t\t\t\t<th style=\"height: 24px;\"><span style=\"color: #000000;\">Alphabetic code</span></th>\n" +
            "\t\t\t\t\t\t\t<th style=\"height: 24px;\"><span style=\"color: #000000;\">Numeric code</span></th>\n" +
            "\t\t\t\t\t\t\t<th style=\"height: 24px;\"><span style=\"color: #000000;\">Symbol</span></th>\n" +
            "\t\t\t\t\t\t\t<th style=\"height: 24px;\"><span style=\"color: #000000;\">Subdivision</span></th>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t</thead>\n" +
            "\t\t\t\t\t\t<tfoot></tfoot>\n" +
            "\t\t\t\t\t\t<tbody>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Cambodia</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Riel</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">KHR</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">116</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">CR</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 sen</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Cameroon</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">CFA Franc BEAC</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">XAF</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">950</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">CFAF</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 centimes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Canada</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Canadian Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">CAD</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">124</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Can$</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Cape Verde</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Cape Verde Escudo</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">CVE</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">132</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">C.V.Esc.</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 centavos</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Cayman Islands</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Cayman Islands Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">KYD</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">136</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">CI$</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Central African Republic</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">CFA Franc BEAC</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">XAF</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">950</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">CFAF</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 centimes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Chad</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">CFA Franc BEAC</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">XAF</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">950</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">CFAF</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 centimes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Chile</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Chilean Peso</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">CLP</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">152</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Ch$</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 centavos</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">China</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Yuan Renminbi</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">CNY</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">156</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Y</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">10 jiao = 100 fen</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Christmas Island</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Australian Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">AUD</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">36</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">A$</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Cocos (Keeling) Islands</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Australian Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">AUD</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">36</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">A$</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Colombia</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Colombian Peso</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">COP</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">170</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Col$</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 centavos</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Comoros</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Comoro Franc</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">KMF</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">174</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">CF</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Congo</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">CFA Franc BEAC</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">XAF</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">950</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">CFAF</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 centimes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Congo, The Democratic Republic Of</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Franc Congolais</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">CDF</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">976</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 centimes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Cook Islands</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">New Zealand Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">NZD</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">554</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">NZ$</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Costa Rica</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Costa Rican Colon</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">CRC</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">188</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">slashed C</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 centimos</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Cote D&#8217;ivoire</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">CFA Franc BCEAO</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">XOF</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">952</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">CFAF</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 centimes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Croatia</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Kuna</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">HRK</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">191</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">HRK</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 lipas</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Cuba</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Cuban Peso</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">CUP</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">192</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Cu$</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 centavos</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Cyprus</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Cyprus Pound</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">CYP</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">196</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">£C</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Cyprus &#8211; TRNC</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Turkish Lira</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">TRL</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">792</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">TL</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 kurus</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Czech Republic</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Czech Koruna</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">CZK</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">203</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Kc (with hacek on c)</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 haleru</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Denmark</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Danish Krone</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">DKK</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">208</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Dkr</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 øre</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Djibouti</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Djibouti Franc</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">DJF</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">262</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">DF</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 centimes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Dominica</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">East Caribbean Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">XCD</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">951</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">EC$</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Dominican Republic</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Dominican Peso</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">DOP</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">214</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">RD$</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 centavos</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">East Timor</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">US Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">USD</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">840</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">$</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Ecuador</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">US Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">USD</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">840</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">$</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Egypt</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Egyptian Pound</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">EGP</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">818</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">£E</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 piasters or 1,000 milliemes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">El Salvador</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">El Salvador Colon</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">SVC</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">222</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">¢</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 centavos</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Equatorial Guinea</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">CFA Franc BEAC</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">XAF</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">950</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">CFAF</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 centimos</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Estonia</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Kroon</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">EEK</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">233</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Nfa</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Eritrea</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Nakfa</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">ERN</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">232</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">KR</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 senti</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Ethiopia</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Ethiopian Birr</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">ETB</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">230</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Br</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">European Union</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Euro</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">EUR</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">978</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">€</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 euro-cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Faeroe Islands</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Danish Krone</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">DKK</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">208</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Dkr</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 øre</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Falkland Islands (Malvinas)</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Pound</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">FKP</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">238</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">£F</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 pence</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Fiji</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Fiji Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">FJD</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">242</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">F$</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Finland</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Euro</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">EUR</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">978</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">€</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 euro-cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">France</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Euro</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">EUR</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">978</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">€</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 euro-cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">French Guiana</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Euro</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">EUR</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">978</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">€</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 euro-cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">French Polynesia</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">CFP Franc</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">XPF</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">953</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">CFPF</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 centimes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr style=\"height: 24px;\">\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">French Southern Territories</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">Euro</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">EUR</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">978</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">€</span></td>\n" +
            "\t\t\t\t\t\t\t<td style=\"height: 24px;\"><span style=\"color: #000000;\">100 euro-cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t</tbody>\n" +
            "\t\t\t\t\t</table>\n" +
            "\t\t\t\t</div>\n" +
            "\t\t\t\t<div class=\"kt-tab-content\" data-table-number=\"2\">\n" +
            "\t\t\t\t\t<h4><span style=\"font-size: 14pt;\"><strong>Tên quốc gia (G &#8211; K):</strong></span></h4>\n" +
            "\t\t\t\t\t<table  class=\"tablesorter\" border=\"1\" cellspacing=\"0\" cellpadding=\"1\">\n" +
            "\t\t\t\t\t\t<thead>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<th><span style=\"color: #000000;\">Country</span></th>\n" +
            "\t\t\t\t\t\t\t<th><span style=\"color: #000000;\">Currency</span></th>\n" +
            "\t\t\t\t\t\t\t<th><span style=\"color: #000000;\">Alphabetic code</span></th>\n" +
            "\t\t\t\t\t\t\t<th><span style=\"color: #000000;\">Numeric code</span></th>\n" +
            "\t\t\t\t\t\t\t<th><span style=\"color: #000000;\">Symbol</span></th>\n" +
            "\t\t\t\t\t\t\t<th><span style=\"color: #000000;\">Subdivision</span></th>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t</thead>\n" +
            "\t\t\t\t\t\t<tfoot></tfoot>\n" +
            "\t\t\t\t\t\t<tbody>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Gabon</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">CFA Franc BEAC</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">XAF</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">950</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">CFAF</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 centimes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Gambia</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Dalasi</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">GMD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">270</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">D</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 butut</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Georgia</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Lari</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">GEL</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">981</span></td>\n" +
            "\t\t\t\t\t\t\t<td></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 tetri</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Germany</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Euro</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">EUR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">978</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">€</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 euro-cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Ghana</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Cedi</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">GHC</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">288</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">¢</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 psewas</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Gibraltar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Gibraltar Pound</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">GIP</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">292</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">£G</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 pence</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Greece</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Euro</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">EUR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">978</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">€</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 euro-cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Greenland</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Danish Krone</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">DKK</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">208</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Dkr</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 øre</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Grenada</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">East Caribbean Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">XCD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">951</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">EC$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Guadeloupe</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Euro</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">EUR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">978</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">€</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 euro-cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Guam</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">US Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">USD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">840</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Guatemala</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Quetzal</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">GTQ</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">320</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Q</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 centavos</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Guinea</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Guinea Franc</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">GNF</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">324</span></td>\n" +
            "\t\t\t\t\t\t\t<td></td>\n" +
            "\t\t\t\t\t\t\t<td></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Guinea-Bissau</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">CFA Franc BCEAO</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">XOF</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">952</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">CFAF</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 centimes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Guyana</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Guyana Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">GYD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">328</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">G$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Haiti</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Gourde</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">HTG</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">332</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">G</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 centimes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">US Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">USD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">840</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Heard and Mcdonald Islands</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Australian Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">AUD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">36</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">A$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Honduras</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Lempira</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">HNL</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">340</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">L</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 centavos</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Hong Kong</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Hong Kong Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">HKD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">344</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">HK$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Hungary</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Forint</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">HUF</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">348</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Ft</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">-none-</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Iceland</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Iceland Krona</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">ISK</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">352</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">IKr</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 aurar (sg. aur)</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">India</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Indian Rupee</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">INR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">356</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Rs</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 paise</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Indonesia</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Rupiah</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">IDR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">360</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Rp</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 sen (no longer used)</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">International</span><br />\n" +
            "\t\t\t\t\t\t\t\t<span style=\"color: #000000;\">Monetary Fund (Imf)</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">SDR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">XDR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">960</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">SDR</span></td>\n" +
            "\t\t\t\t\t\t\t<td></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Iran (Islamic Republic Of)</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Iranian Rial</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">IRR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">364</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Rls</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">10 rials = 1 toman</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Iraq</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Iraqi Dinar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">IQD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">368</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">ID</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">1,000 fils</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Ireland</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Euro</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">EUR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">978</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">€</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 euro-cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Israel</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">New Israeli Sheqel</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">ILS</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">376</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">NIS</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 new agorot</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Italy</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Euro</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">EUR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">978</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">€</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 euro-cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Jamaica</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Jamaican Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">JMD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">388</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">J$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Japan</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Yen</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">JPY</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">392</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">¥</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 sen (not used)</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Jersey</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Pound Sterling</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">GBP</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">826</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">£</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 pence</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Jordan</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Jordanian Dinar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">JOD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">400</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">JD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">1,000 fils</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Kazakhstan</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Tenge</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">KZT</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">398</span></td>\n" +
            "\t\t\t\t\t\t\t<td></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 tiyn</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Kenya</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Kenyan Shilling</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">KES</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">404</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">K Sh</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Kiribati</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Australian Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">AUD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">36</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">A$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Korea, Democratic</span><br />\n" +
            "\t\t\t\t\t\t\t\t<span style=\"color: #000000;\">People&#8217;s Republic Of</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">North Korean Won</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">KPW</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">408</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Wn</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 chon</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Korea, Republic Of</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Won</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">KRW</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">410</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">W</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 chon</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Kuwait</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Kuwaiti Dinar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">KWD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">414</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">KD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">1,000 fils</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Kyrgyzstan</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Som</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">KGS</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">417</span></td>\n" +
            "\t\t\t\t\t\t\t<td></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 tyyn</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t</tbody>\n" +
            "\t\t\t\t\t</table>\n" +
            "\t\t\t\t</div>\n" +
            "\t\t\t\t<div class=\"kt-tab-content\" data-table-number=\"3\">\n" +
            "\t\t\t\t\t<h4><span style=\"font-size: 14pt;\"><strong>Tên quốc gia (L &#8211; O):</strong></span></h4>\n" +
            "\t\t\t\t\t<table  class=\"tablesorter\" border=\"1\" cellspacing=\"0\" cellpadding=\"2\">\n" +
            "\t\t\t\t\t\t<thead>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<th><span style=\"color: #000000;\">Country</span></th>\n" +
            "\t\t\t\t\t\t\t<th><span style=\"color: #000000;\">Currency</span></th>\n" +
            "\t\t\t\t\t\t\t<th><span style=\"color: #000000;\">Alphabetic code</span></th>\n" +
            "\t\t\t\t\t\t\t<th><span style=\"color: #000000;\">Numeric code</span></th>\n" +
            "\t\t\t\t\t\t\t<th><span style=\"color: #000000;\">Symbol</span></th>\n" +
            "\t\t\t\t\t\t\t<th><span style=\"color: #000000;\">Subdivision</span></th>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t</thead>\n" +
            "\t\t\t\t\t\t<tfoot></tfoot>\n" +
            "\t\t\t\t\t\t<tbody>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Lao People&#8217;s</span><br />\n" +
            "\t\t\t\t\t\t\t\t<span style=\"color: #000000;\">Democratic Republic</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Kip</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">LAK</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">418</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">KN</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 at</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Latvia</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Latvian Lats</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">LVL</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">428</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Ls</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 santims</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Lebanon</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Lebanese Pound</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">LBP</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">422</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">L.L.</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 piastres</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Lesotho</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Loti</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">LSL</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">426</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">L, pl., M</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 lisente</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Lesotho (other)</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Rand</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">ZAR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">710</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">R</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Liberia</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Liberian Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">LRD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">430</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Libyan Arab</span><br />\n" +
            "\t\t\t\t\t\t\t\t<span style=\"color: #000000;\">Jamahiriya</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Libyan Dinar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">LYD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">434</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">LD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">1,000 dirhams</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Liechtenstein</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Swiss Franc</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">CHF</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">756</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">SwF</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 rappen/centimes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Lithuania</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Lithuanian Litas</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">LTL</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">440</span></td>\n" +
            "\t\t\t\t\t\t\t<td></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 centu</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Luxembourg</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Euro</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">EUR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">978</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">€</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 euro-cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Macau</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Pataca</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">MOP</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">446</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">P</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 avos</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Macedonia, The Former</span><br />\n" +
            "\t\t\t\t\t\t\t\t<span style=\"color: #000000;\">Yugoslav Republic Of</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Denar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">MKD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">807</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">MKD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 deni</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Madagascar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Malagasy Franc</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">MGF</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">450</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">FMG</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 centimes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Malawi</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Kwacha</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">MWK</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">454</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">MK</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 tambala</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Malaysia</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Malaysian Ringgit</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">MYR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">458</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">RM</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 sen</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Maldives</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Rufiyaa</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">MVR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">462</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Rf</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 lari</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Mali</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">CFA Franc BCEAO</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">XOF</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">952</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">CFAF</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 centimes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Malta</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Maltese Lira</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">MTL</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">470</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Lm</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Marshall Islands</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">US Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">USD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">840</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Martinique</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Euro</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">EUR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">978</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">€</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 euro-cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Mauritania</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Ouguiya</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">MRO</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">478</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">UM</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">5 khoums</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Mauritius</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Mauritius Rupee</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">MUR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">480</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Mau Rs</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Mexico</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Mexican Peso</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">MXN</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">484</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Mex$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 centavos</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Micronesia</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">US Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">USD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">840</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Moldova, Republic Of</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Moldovan Leu</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">MDL</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">498</span></td>\n" +
            "\t\t\t\t\t\t\t<td></td>\n" +
            "\t\t\t\t\t\t\t<td></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Monaco</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Euro</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">EUR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">978</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">€</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 euro-cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Mongolia</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Tugrik</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">MNT</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">496</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Tug</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 mongos</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Montserrat</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">East Caribbean Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">XCD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">951</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">EC$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Morocco</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Moroccan Dirham</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">MAD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">504</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">DH</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 centimes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Mozambique</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Metical</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">MZM</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">508</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Mt</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 centavos</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Myanmar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Kyat</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">MMK</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">104</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">K</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 pyas</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Namibia</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Namibia Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">NAD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">516</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">N$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Namibia (other)</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Rand</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">ZAR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">710</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">R</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Nauru</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Australian Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">AUD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">36</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">A$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Nepal</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Nepalese Rupee</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">NPR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">524</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">NRs</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 paise</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Netherlands</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Euro</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">EUR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">978</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">€</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 euro-cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Netherlands Antilles</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Antillian Guilder</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">ANG</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">532</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Ant.f. or NAf.</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">New Caledonia</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">CFP Franc</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">XPF</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">953</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">CFPF</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 centimes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">New Zealand</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">New Zealand Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">NZD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">554</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">NZ$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Nicaragua</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Cordoba Oro</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">NIO</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">558</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">C$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 centavos</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Niger</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">CFA Franc BCEAO</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">XOF</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">952</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">CFAF</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 centimes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Nigeria</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Naira</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">NGN</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">566</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">double-dashed N</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 kobo</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Niue</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">New Zealand Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">NZD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">554</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">NZ$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Norfolk Island</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Australian Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">AUD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">36</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">A$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Northern</span><br />\n" +
            "\t\t\t\t\t\t\t\t<span style=\"color: #000000;\">Mariana Islands</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">US Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">USD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">840</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Norway</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Norwegian Krone</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">NOK</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">578</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">NKr</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 øre</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Oman</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Rial Omani</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">OMR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">512</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">RO</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">1,000 baizas</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t</tbody>\n" +
            "\t\t\t\t\t</table>\n" +
            "\t\t\t\t</div>\n" +
            "\t\t\t\t<div class=\"kt-tab-content\" data-table-number=\"4\">\n" +
            "\t\t\t\t\t<h4><span style=\"font-size: 14pt;\"><strong>Tên quốc gia (P &#8211; S):</strong></span></h4>\n" +
            "\t\t\t\t\t<table class=\"tablesorter\" border=\"1\" cellspacing=\"0\" cellpadding=\"1\">\n" +
            "\t\t\t\t\t\t<thead>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<th><span style=\"color: #000000;\">Country</span></th>\n" +
            "\t\t\t\t\t\t\t<th><span style=\"color: #000000;\">Currency</span></th>\n" +
            "\t\t\t\t\t\t\t<th><span style=\"color: #000000;\">Alphabetic code</span></th>\n" +
            "\t\t\t\t\t\t\t<th><span style=\"color: #000000;\">Numeric code</span></th>\n" +
            "\t\t\t\t\t\t\t<th><span style=\"color: #000000;\">Symbol</span></th>\n" +
            "\t\t\t\t\t\t\t<th><span style=\"color: #000000;\">Subdivision</span></th>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t</thead>\n" +
            "\t\t\t\t\t\t<tfoot></tfoot>\n" +
            "\t\t\t\t\t\t<tbody>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Pakistan</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Pakistan Rupee</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">PKR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">586</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Rs</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 paisa</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Palau</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">US Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">USD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">840</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Panama</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Balboa</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">PAB</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">590</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">B</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 centesimos</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Panama (other)</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">US Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">USD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">840</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Papua New Guinea</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Kina</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">PGK</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">598</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">K</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 toeas</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Paraguay</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Guarani</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">PYG</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">600</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">slashed G</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 centimos</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Peru</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Nuevo Sol</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">PEN</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">604</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">S/.</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 centimos</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Philippines</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Philippine Peso</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">PHP</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">608</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">dashed P</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 centavos</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Pitcairn</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">New Zealand Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">NZD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">554</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">NZ$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Poland</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Zloty</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">PLN</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">985</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">z dashed l</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 groszy</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Portugal</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Euro</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">EUR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">978</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">€</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 euro-cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Puerto Rico</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">US Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">USD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">840</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Qatar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Qatari Rial</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">QAR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">634</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">QR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 dirhams</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Reunion</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Euro</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">EUR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">978</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">€</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 euro-cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Romania</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Leu</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">RON</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">946</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">L</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 bani</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Russian Federation</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Russian Ruble</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">RUB</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">810</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">R</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 kopecks</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Rwanda</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Rwanda Franc</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">RWF</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">646</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">RF</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 centimes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">St Helena</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">St Helena Pound</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">SHP</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">654</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">£S</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 new pence</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">St Kitts &#8211; Nevis</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">East Caribbean Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">XCD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">951</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">EC$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Saint Lucia</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">East Caribbean Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">XCD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">951</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">EC$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">St Pierre</span><br />\n" +
            "\t\t\t\t\t\t\t\t<span style=\"color: #000000;\">and Miquelon</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Euro</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">EUR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">978</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">€</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 euro-cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Saint Vincent</span><br />\n" +
            "\t\t\t\t\t\t\t\t<span style=\"color: #000000;\">and The Grenadines</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">East Caribbean Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">XCD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">951</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">EC$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Samoa</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Tala</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">WST</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">882</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">WS$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 sene</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">San Marino</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Euro</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">EUR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">978</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">€</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 euro-cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Sao Tome and Principe</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Dobra</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">STD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">678</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Db</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 centimos</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Saudi Arabia</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Saudi Riyal</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">SAR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">682</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">SRls</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 halalat</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Senegal</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">CFA Franc BCEAO</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">XOF</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">952</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">CFAF</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 centimes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Serbia and Montenegro</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">New Dinar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">YUM</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">891</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Din</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 paras</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Serbia and Montenegro (other)</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Euro (in Montenegro)</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">EUR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">978</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">€</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 euro-cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Seychelles</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Seychelles Rupee</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">SCR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">690</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">SR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Sierra Leone</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Leone</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">SLL</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">694</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Le</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Singapore</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Singapore Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">SGD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">702</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">S$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Slovakia</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Slovak Koruna</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">SKK</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">703</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Sk</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 halierov</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Slovenia</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Tolar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">SIT</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">705</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">SlT</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 stotinov</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Solomon Islands</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Solomon Islands Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">SBD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">90</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">SI$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Somalia</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Somali Shilling</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">SOS</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">706</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">So. Sh.</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 centesimi</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">South Africa</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Rand</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">ZAR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">710</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">R</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Spain</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Euro</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">EUR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">978</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">€</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 euro-cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Sri Lanka</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Sri Lanka Rupee</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">LKR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">144</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">SLRs</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Sudan</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Sudanese Dinar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">SDD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">736</span></td>\n" +
            "\t\t\t\t\t\t\t<td></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 piastres</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Suriname</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Surinam Guilder</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">SRG</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">740</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Sur.f. or Sf.</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Svalbard and</span><br />\n" +
            "\t\t\t\t\t\t\t\t<span style=\"color: #000000;\">Jan Mayen Islands</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Norwegian Krone</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">NOK</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">578</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">NKr</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 øre</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Swaziland</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Lilangeni</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">SZL</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">748</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">L, pl., E</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Sweden</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Swedish Krona</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">SEK</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">752</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Sk</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 öre</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Switzerland</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Swiss Franc</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">CHF</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">756</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">SwF</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 rappen/centimes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Syrian Arab Republic</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Syrian Pound</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">SYP</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">760</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">£S</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 piasters</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t</tbody>\n" +
            "\t\t\t\t\t</table>\n" +
            "\t\t\t\t</div>\n" +
            "\t\t\t\t<div class=\"kt-tab-content\" data-table-number=\"5\">\n" +
            "\t\t\t\t\t<h4><span style=\"font-size: 14pt;\"><strong>Tên quốc gia (T &#8211; Z):</strong></span></h4>\n" +
            "\t\t\t\t\t<table class=\"tablesorter\" border=\"1\" cellspacing=\"0\" cellpadding=\"1\">\n" +
            "\t\t\t\t\t\t<thead>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<th><span style=\"color: #000000;\">Country</span></th>\n" +
            "\t\t\t\t\t\t\t<th><span style=\"color: #000000;\">Currency</span></th>\n" +
            "\t\t\t\t\t\t\t<th><span style=\"color: #000000;\">Alphabetic code</span></th>\n" +
            "\t\t\t\t\t\t\t<th><span style=\"color: #000000;\">Numeric code</span></th>\n" +
            "\t\t\t\t\t\t\t<th><span style=\"color: #000000;\">Symbol</span></th>\n" +
            "\t\t\t\t\t\t\t<th><span style=\"color: #000000;\">Subdivision</span></th>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t</thead>\n" +
            "\t\t\t\t\t\t<tfoot></tfoot>\n" +
            "\t\t\t\t\t\t<tbody>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Taiwan, Province Of China</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">New Taiwan Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">TWD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">901</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">NT$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Tajikistan</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Somoni</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">TJS</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">972</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 dirams</span></td>\n" +
            "\t\t\t\t\t\t\t<td></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Tanzania, United Republic Of</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Tanzanian Shilling</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">TZS</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">834</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">TSh</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Thailand</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Baht</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">THB</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">764</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Bht or Bt</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 stang</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Togo</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">CFA Franc BCEAO</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">XOF</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">952</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">CFAF</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 centimes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Tokelau</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">New Zealand Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">NZD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">554</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">NZ$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Tonga</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Pa&#8217;anga</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">TOP</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">776</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">PT or T$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 seniti</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Trinidad and Tobago</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Trinidad and Tobago Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">TTD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">780</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">TT$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Tunisia</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Tunisian Dinar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">TND</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">788</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">TD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">1,000 millimes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Turkey</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Turkish Lira</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">TRL</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">792</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">TL</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 kurus</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Turkmenistan</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Manat</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">TMM</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">795</span></td>\n" +
            "\t\t\t\t\t\t\t<td></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 tenga</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Turks and Caicos Islands</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">US Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">USD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">840</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Tuvalu</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Australian Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">AUD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">36</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">A$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Uganda</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Uganda Shilling</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">UGX</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">800</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">USh</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Ukraine</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Hryvnia</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">UAH</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">980</span></td>\n" +
            "\t\t\t\t\t\t\t<td></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 kopiykas</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">United Arab Emirates</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">UAE Dirham</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">AED</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">784</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Dh</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 fils</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">United Kingdom</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Pound Sterling</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">GBP</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">826</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">£</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 pence</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">United States</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">US Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">USD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">840</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">(Same day)</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">USS</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">998</span></td>\n" +
            "\t\t\t\t\t\t\t<td></td>\n" +
            "\t\t\t\t\t\t\t<td></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">(Next day)</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">USN</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">997</span></td>\n" +
            "\t\t\t\t\t\t\t<td></td>\n" +
            "\t\t\t\t\t\t\t<td></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">United States Minor Outlaying Islands</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">US Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">USD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">840</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Uruguay</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Peso Uruguayo</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">UYU</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">858</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">$U</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 centésimos</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Uzbekistan</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Uzbekistan Sum</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">UZS</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">860</span></td>\n" +
            "\t\t\t\t\t\t\t<td></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 tiyin</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Vanuatu</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Vatu</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">VUV</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">548</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">VT</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 centimes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Vatican City State (Holy See)</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Euro</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">EUR</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">978</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">€</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 euro-cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Venezuela</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Bolivar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">VEB</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">862</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Bs</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 centimos</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Vietnam</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Dong</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">VND</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">704</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">D</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">10 hao or 100 xu</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Virgin Islands (British)</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">US Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">USD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">840</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Virgin Islands (U.S.)</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">US Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">USD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">840</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Wallis and Futuna Islands</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">CFP Franc</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">XPF</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">953</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">CFPF</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 centimes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Western Sahara</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Moroccan Dirham</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">MAD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">504</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">DH</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 centimes</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Yemen</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Yemeni Rial</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">YER</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">886</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">YRls</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 fils</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Zambia</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Kwacha</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">ZMK</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">894</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">ZK</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 ngwee</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t<tr>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Zimbabwe</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Zimbabwe Dollar</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">ZWD</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">716</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">Z$</span></td>\n" +
            "\t\t\t\t\t\t\t<td><span style=\"color: #000000;\">100 cents</span></td>\n" +
            "\t\t\t\t\t\t</tr>\n" +
            "\t\t\t\t\t\t</tbody>\n" +
            "\t\t\t\t\t</table>\n" +
            "\t\t\t\t</div>\n" +
            "\t\t\t</div>";
    }
    jQuery(".kt-switch-table-wrapper").append(html);
    jQuery(".kt-tabs > .kt-tab-content").each(function () {
        if (jQuery(this).data("table-number") === 0)
            jQuery(this).css({display: "block"});
        else
            jQuery(this).css({display: "none"});
    })
})