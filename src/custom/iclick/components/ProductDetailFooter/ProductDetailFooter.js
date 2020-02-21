import React from "react";
import Link from "custom/iclick/components/Link";
import { Tab, Tabs, NavItem, Nav } from "react-bootstrap";

const ProductDescription = (props) => (
  <div className="product-single-tabs">
    <Tab.Container id="left-tabs-example" defaultActiveKey="product-tab-desc">

      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link eventKey="product-tab-desc">Description</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="product-tab-tags">Tags</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="product-tab-specifications">Specifications</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="product-tab-info">Additional Information</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="product-tab-order">Delivery, Order & Collect and Services</Nav.Link>
        </Nav.Item>
      </Nav>

      <Tab.Content>
        <Tab.Pane eventKey="product-tab-desc">
          <div dangerouslySetInnerHTML={{ __html: props.description }} />
        </Tab.Pane>
        <Tab.Pane eventKey="product-tab-tags">
          {props.tags.map((tag) =>
            <h3 className="d-inline-block mr-3">
              <Link route={`/tag/${tag.slug}`} className="badge badge-secondary">{tag.name}</Link>
            </h3>)}
        </Tab.Pane>
        <Tab.Pane eventKey="product-tab-specifications">
          <div id="specs-list">
            {" "}
            <table className="table table-bordered mb-0 " cellSpacing={0}>
              {" "}
              <tbody>
                {" "}
                <tr className="tr-hover">
                  {" "}
                  <th rowSpan={15} className="align-middle w-15 text-danger bg-light" scope="row">
                NETWORK
                  </th>{" "}
                  <td className="w-15 font-weight-bold">Technology</td>{" "}
                  <td className="w-75">GSM / CDMA / HSPA / EVDO / LTE</td>{" "}
                </tr>{" "}
                <tr className="tr-toggle">
                  {" "}
                  <td className="w-15 font-weight-bold">2G bands</td>{" "}
                  <td className="w-75" data-spec="net2g">
                GSM 850 / 900 / 1800 / 1900
                  </td>{" "}
                </tr>{" "}
                <tr className="tr-toggle" data-spec-optional>
                  {" "}
                  <td className="w-15 font-weight-bold" />{" "}
                  <td className="w-75">CDMA 800 / 1900 / 2100 – A1864</td>{" "}
                </tr>{" "}
                <tr className="tr-toggle">
                  {" "}
                  <td className="w-15 font-weight-bold">3G bands</td>{" "}
                  <td className="w-75" data-spec="net3g">
                HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100 – A1864, A1897
                  </td>{" "}
                </tr>{" "}
                <tr className="tr-toggle" data-spec-optional>
                  {" "}
                  <td className="w-15 font-weight-bold" />{" "}
                  <td className="w-75">CDMA2000 1xEV-DO &amp; TD-SCDMA – A1864</td>{" "}
                </tr>{" "}
                <tr className="tr-toggle">
                  {" "}
                  <td className="w-15 font-weight-bold">4G bands</td>{" "}
                  <td className="w-75" data-spec="net4g">
                LTE band 1(2100), 2(1900), 3(1800), 4(1700/2100), 5(850),
                7(2600), 8(900), 12(700), 13(700), 17(700), 18(800), 19(800),
                20(800), 25(1900), 26(850), 28(700), 29(700), 30(2300),
                34(2000), 38(2600), 39(1900), 40(2300), 41(2500), 66(1700/2100)
                – A1864, A1897
                  </td>{" "}
                </tr>{" "}
                <tr className="tr-toggle">
                  {" "}
                  <td className="w-15 font-weight-bold">Speed</td>{" "}
                  <td className="w-75" data-spec="speed">
                HSPA 42.2/5.76 Mbps, LTE-A (4CA) Cat16 1024/150 Mbps, EV-DO
                Rev.A 3.1 Mbps
                  </td>{" "}
                </tr>{" "}
                <tr className="tr-toggle">
                  {" "}
                  <td className="w-15 font-weight-bold">GPRS</td>{" "}
                  <td className="w-75" data-spec="gprstext">
                Yes
                  </td>{" "}
                </tr>{" "}
                <tr className="tr-toggle">
                  {" "}
                  <td className="w-15 font-weight-bold">EDGE</td>{" "}
                  <td className="w-75" data-spec="edge">
                Yes
                  </td>{" "}
                </tr>{" "}
              </tbody>{" "}
            </table>{" "}
            <table className="table table-bordered mb-0 " cellSpacing={0}>
              {" "}
              <tbody>
                {" "}
                <tr>
                  {" "}
                  <th rowSpan={15} className="align-middle w-15 text-danger bg-light" scope="row">
                LAUNCH
                  </th>{" "}
                  <td className="w-15 font-weight-bold">Announced</td>{" "}
                  <td className="w-75" data-spec="year">
                2017, September
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold">Status</td>{" "}
                  <td className="w-75" data-spec="status">
                Coming soon. Exp. release 2017, September
                  </td>{" "}
                </tr>{" "}
              </tbody>{" "}
            </table>{" "}
            <table className="table table-bordered mb-0 " cellSpacing={0}>
              {" "}
              <tbody>
                {" "}
                <tr>
                  {" "}
                  <th rowSpan={15} className="align-middle w-15 text-danger bg-light" scope="row">
                BODY
                  </th>{" "}
                  <td className="w-15 font-weight-bold">Dimensions</td>{" "}
                  <td className="w-75" data-spec="dimensions">
                138.4 x 67.3 x 7.3 mm (5.45 x 2.65 x 0.29 in)
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold">Weight</td>{" "}
                  <td className="w-75" data-spec="weight">
                148 g (5.22 oz)
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold">SIM</td>{" "}
                  <td className="w-75" data-spec="sim">
                Nano-SIM
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold" />{" "}
                  <td className="w-75" data-spec="bodyother">
                – IP67 certified – dust and water resistant
                    <br /> – Water resistant up to 1 meter and 30 minutes
                    <br /> – Apple Pay (Visa, MasterCard, AMEX certified)
                  </td>{" "}
                </tr>{" "}
              </tbody>{" "}
            </table>{" "}
            <table className="table table-bordered mb-0 " cellSpacing={0}>
              {" "}
              <tbody>
                {" "}
                <tr>
                  {" "}
                  <th rowSpan={15} className="align-middle w-15 text-danger bg-light" scope="row">
                DISPLAY
                  </th>{" "}
                  <td className="w-15 font-weight-bold">Type</td>{" "}
                  <td className="w-75" data-spec="displaytype">
                LED-backlit IPS LCD, capacitive touchscreen, 16M colors
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold">Size</td>{" "}
                  <td className="w-75">4.7 inches (~65.4% screen-to-body ratio)</td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold">Resolution</td>{" "}
                  <td className="w-75" data-spec="displayresolution">
                750 x 1334 pixels (~326 ppi pixel density)
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold">
                Multitouch
                  </td> <td className="w-75">Yes</td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold">Protection</td>{" "}
                  <td className="w-75" data-spec="displayprotection">
                Ion-strengthened glass, oleophobic coating
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold" />{" "}
                  <td className="w-75" data-spec="displayother">
                – Wide color gamut display
                    <br /> – 3D Touch display &amp; home button
                    <br /> – True-tone display
                  </td>{" "}
                </tr>{" "}
              </tbody>{" "}
            </table>{" "}
            <table className="table table-bordered mb-0 " cellSpacing={0}>
              {" "}
              <tbody>
                {" "}
                <tr>
                  {" "}
                  <th rowSpan={15} className="align-middle w-15 text-danger bg-light" scope="row">
                PLATFORM
                  </th>{" "}
                  <td className="w-15 font-weight-bold">OS</td>{" "}
                  <td className="w-75" data-spec="os">
                iOS 11
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold">Chipset</td>{" "}
                  <td className="w-75" data-spec="chipset">
                Apple A11 Bionic
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold">CPU</td>{" "}
                  <td className="w-75" data-spec="cpu">
                Hexa-core (2x Monsoon + 4x Mistral)
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold">GPU</td>{" "}
                  <td className="w-75" data-spec="gpu">
                Apple GPU (three-core graphics)
                  </td>{" "}
                </tr>{" "}
              </tbody>{" "}
            </table>{" "}
            <table className="table table-bordered mb-0 " cellSpacing={0}>
              {" "}
              <tbody>
                {" "}
                <tr>
                  {" "}
                  <th rowSpan={15} className="align-middle w-15 text-danger bg-light" scope="row">
                MEMORY
                  </th>{" "}
                  <td className="w-15 font-weight-bold">Card slot</td>{" "}
                  <td className="w-75" data-spec="memoryslot">
                No
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold">Internal</td>{" "}
                  <td className="w-75" data-spec="internalmemory">
                64/256 GB, 2 GB RAM
                  </td>{" "}
                </tr>{" "}
              </tbody>{" "}
            </table>{" "}
            <table className="table table-bordered mb-0 " cellSpacing={0}>
              {" "}
              <tbody>
                {" "}
                <tr>
                  {" "}
                  <th rowSpan={15} className="align-middle w-15 text-danger bg-light" scope="row">
                CAMERA
                  </th>{" "}
                  <td className="w-15 font-weight-bold">Primary</td>{" "}
                  <td className="w-75" data-spec="cameraprimary">
                12 MP, f/1.8, 28mm, phase detection autofocus, OIS, quad-LED
                (dual tone) flash
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold">Features</td>{" "}
                  <td className="w-75" data-spec="camerafeatures">
                1/3″ sensor size, geo-tagging, simultaneous 4K video and 8MP
                image recording, touch focus, face/smile detection, HDR
                (photo/panorama)
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold">Video</td>{" "}
                  <td className="w-75" data-spec="cameravideo">
                2160p@24/30/60fps, 1080p@30/60/120/240fps
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold">Secondary</td>{" "}
                  <td className="w-75" data-spec="camerasecondary">
                7 MP, f/2.2, 1080p@30fps, 720p@240fps, face detection, HDR,
                panorama
                  </td>{" "}
                </tr>{" "}
              </tbody>{" "}
            </table>{" "}
            <table className="table table-bordered mb-0 " cellSpacing={0}>
              {" "}
              <tbody>
                {" "}
                <tr>
                  {" "}
                  <th rowSpan={15} className="align-middle w-15 text-danger bg-light" scope="row">
                SOUND
                  </th>{" "}
                  <td className="w-15 font-weight-bold">Alert types</td>{" "}
                  <td className="w-75">Vibration, proprietary ringtones</td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold">Loudspeaker</td>{" "}
                  <td className="w-75">Yes, with stereo speakers</td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold">
                3.5mm jack
                  </td> <td className="w-75">No</td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold" />{" "}
                  <td className="w-75" data-spec="optionalother">
                – Active noise cancellation with dedicated mic
                    <br /> – Lightning to 3.5 mm headphone jack adapter
                  </td>{" "}
                </tr>{" "}
              </tbody>{" "}
            </table>{" "}
            <table className="table table-bordered mb-0 " cellSpacing={0}>
              {" "}
              <tbody>
                {" "}
                <tr>
                  {" "}
                  <th rowSpan={15} className="align-middle w-15 text-danger bg-light" scope="row">
                COMMS
                  </th>{" "}
                  <td className="w-15 font-weight-bold">WLAN</td>{" "}
                  <td className="w-75" data-spec="wlan">
                Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold">Bluetooth</td>{" "}
                  <td className="w-75" data-spec="bluetooth">
                5.0, A2DP, LE
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold">GPS</td>{" "}
                  <td className="w-75" data-spec="gps">
                Yes, with A-GPS, GLONASS, BDS, GALILEO
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold">NFC</td>{" "}
                  <td className="w-75" data-spec="nfc">
                Yes (Apple Pay only)
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold">Radio</td>{" "}
                  <td className="w-75" data-spec="radio">
                No
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold">USB</td>{" "}
                  <td className="w-75" data-spec="usb">
                2.0, reversible connector
                  </td>{" "}
                </tr>{" "}
              </tbody>{" "}
            </table>{" "}
            <table className="table table-bordered mb-0 " cellSpacing={0}>
              {" "}
              <tbody>
                {" "}
                <tr>
                  {" "}
                  <th rowSpan={15} className="align-middle w-15 text-danger bg-light" scope="row">
                FEATURES
                  </th>{" "}
                  <td className="w-15 font-weight-bold">Sensors</td>{" "}
                  <td className="w-75" data-spec="sensors">
                Fingerprint (front-mounted), accelerometer, gyro, proximity,
                compass, barometer
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold">Messaging</td>{" "}
                  <td className="w-75">
                iMessage, SMS (threaded view), MMS, Email, Push Email
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold">Browser</td>{" "}
                  <td className="w-75">HTML5 (Safari)</td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold">Java</td> <td className="w-75">No</td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold" />{" "}
                  <td className="w-75" data-spec="featuresother">
                – Fast battery charging: 50% in 30 min
                    <br /> – Qi wireless charging
                    <br /> – Siri natural language commands and dictation
                    <br /> – iCloud cloud service
                    <br /> – MP3/WAV/AAX+/AIFF/Apple Lossless player
                    <br /> – MP4/H.264 player
                    <br /> – Audio/video/photo editor
                    <br /> – Document editor
                  </td>{" "}
                </tr>{" "}
              </tbody>{" "}
            </table>{" "}
            <table className="table table-bordered mb-0 " cellSpacing={0}>
              {" "}
              <tbody>
                {" "}
                <tr>
                  {" "}
                  <th rowSpan={15} className="align-middle w-15 text-danger bg-light" scope="row">
                BATTERY
                  </th>{" "}
                  <td className="w-15 font-weight-bold" />{" "}
                  <td className="w-75" data-spec="batdescription1">
                Non-removable Li-Ion 1821 mAh battery
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold">Talk time</td>{" "}
                  <td className="w-75" data-spec="battalktime1">
                Up to 14 h (3G)
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold">Music play</td>{" "}
                  <td className="w-75" data-spec="batmusicplayback1">
                Up to 40 h
                  </td>{" "}
                </tr>{" "}
              </tbody>{" "}
            </table>{" "}
            <table className="table table-bordered mb-0 " cellSpacing={0}>
              {" "}
              <tbody>
                {" "}
                <tr>
                  {" "}
                  <th rowSpan={15} className="align-middle w-15 text-danger bg-light" scope="row">
                MISC
                  </th>{" "}
                  <td className="w-15 font-weight-bold">Colors</td>{" "}
                  <td className="w-75" data-spec="colors">
                Silver, Space Gray, Gold
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td className="w-15 font-weight-bold">Price</td>{" "}
                  <td className="w-75" data-spec="price">
                &nbsp;3479
                  </td>{" "}
                </tr>{" "}
              </tbody>{" "}
            </table>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey="product-tab-info">
        <table className="table table-striped table-bordered">
        {" "}
        <tbody>
          <tr className>
            {" "}
            <th>Brand</th>{" "}
            <td>
              Apple
            </td>{" "}
          </tr>{" "}
          <tr className="alt">
            {" "}
            <th>Color</th>{" "}
            <td>
              Product (RED)™, Silver, Space Grey, Gold
            </td>{" "}
          </tr>{" "}
          <tr className>
            {" "}
            <th>Model</th>{" "}
            <td>
              iPhone 8
            </td>{" "}
          </tr>{" "}
          <tr className="alt">
            {" "}
            <th>Features</th>{" "}
            <td>
              3D Touch, Qi Wireless Charging, Water Proof
            </td>{" "}
          </tr>{" "}
          <tr className>
            {" "}
            <th>Screen Size</th>{" "}
            <td>
              4.7″
            </td>{" "}
          </tr>{" "}
          <tr className="alt">
            {" "}
            <th>Screen Technology</th>{" "}
            <td>
              Super Retina Display
            </td>{" "}
          </tr>{" "}
          <tr className>
            {" "}
            <th>Screen Resolution</th>{" "}
            <td>
              Super Retina HD Display
            </td>{" "}
          </tr>{" "}
          <tr className="alt">
            {" "}
            <th>Camera</th>{" "}
            <td>
              12 MP
            </td>{" "}
          </tr>{" "}
          <tr className>
            {" "}
            <th>Internal Memory</th>{" "}
            <td>
              256 GB, 64 GB
            </td>{" "}
          </tr>{" "}
          <tr className="alt">
            {" "}
            <th>Expandable Memory</th>{" "}
            <td>
              No
            </td>{" "}
          </tr>{" "}
          <tr className>
            {" "}
            <th>Connections</th>{" "}
            <td>
              
                3G, 4G LTE, Apple lightning connector, Bluetooth, GPS, VOLTE,
                WiFi
              
            </td>{" "}
          </tr>{" "}
          <tr className="alt">
            {" "}
            <th>Operating System</th>{" "}
            <td>
              IOS
            </td>{" "}
          </tr>{" "}
          <tr className>
            {" "}
            <th>Plug Type</th>{" "}
            <td>
              Lightning Connector
            </td>{" "}
          </tr>{" "}
          <tr className="alt">
            {" "}
            <th>Weight</th>{" "}
            <td>
              148 Grams
            </td>{" "}
          </tr>{" "}
        </tbody>
      </table>
        </Tab.Pane>
        <Tab.Pane eventKey="product-tab-order">
        <div>
        {" "}
        <h3>Delivering your online order</h3>{" "}
        <p>
          <strong>
            Get this delivered on a day to suit you
            <br />{" "}
          </strong>
          At iClick we deliver 6 days a week. Choose from:
        </p>{" "}
        <p>
          <strong>Next day delivery (AED 45):</strong>&nbsp;On orders placed
          before 9 am Saturday-Thursday. Tell us your mobile number and on the
          day of the delivery we’ll text you to say what time your order will be
          with you.
        </p>{" "}
        <p>
          <strong>Same day delivery (AED 60):</strong>&nbsp;Exclusively for
          selected addresses in Dubai Only. Simply place your order before
          9:00am Saturday-Thursday and receive it that evening between 6:30pm
          and 10:30pm.
        </p>{" "}
        <p>
          <strong>Order online and collect in store:</strong>
          <br /> Sometimes you’ll want something even quicker than we can
          deliver. Or you can’t be in when our van or courier would arrive.
          That’s why we offer you the option to order online and collect in
          store.
          <br /> Subject to what you’re ordering and where you want to collect
          from, you can:
        </p>{" "}
        <ol>
          {" "}
          <li>
            <strong>Reserve &amp; Collect –</strong> reserve online for free and
            collect at a local store as soon as you like. Once reserved, your
            item’s held till closing time the next day, to be paid for when you
            collect.SUBJECT TO AVAILABILITY*
          </li>{" "}
          <li>
            <strong>Pay &amp; Collect –</strong> pay online, and have the item
            sent, for free, from our warehouse to a local store for you to
            collect. Starting on the date the item arrives in store – which you
            choose in checkout – you have 24 hours to collect it.
          </li>{" "}
        </ol>
      </div>
        </Tab.Pane>
      </Tab.Content>

    </Tab.Container>
  </div>
);

export default ProductDescription;
