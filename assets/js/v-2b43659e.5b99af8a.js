"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[24445],{16965:(e,t,a)=>{a.r(t),a.d(t,{data:()=>o});const o={key:"v-2b43659e",path:"/devices/TH1123ZB.html",title:"Sinopé TH1123ZB control via MQTT",lang:"en-US",frontmatter:{title:"Sinopé TH1123ZB control via MQTT",description:"Integrate your Sinopé TH1123ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2019-09-08T21:16:00.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Setting outdoor temperature",slug:"setting-outdoor-temperature",children:[]},{level:3,title:"Enabling time",slug:"enabling-time",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Local_temperature (numeric)",slug:"local-temperature-numeric",children:[]},{level:3,title:"Keypad_lockout (enum)",slug:"keypad-lockout-enum",children:[]},{level:3,title:"Power (numeric)",slug:"power-numeric",children:[]},{level:3,title:"Current (numeric)",slug:"current-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Energy (numeric)",slug:"energy-numeric",children:[]},{level:3,title:"Climate",slug:"climate",children:[]},{level:3,title:"Backlight_auto_dim (enum)",slug:"backlight-auto-dim-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/TH1123ZB.md",git:{updatedTime:1641923499e3}}},48751:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var o=a(66252);const n=(0,o.uE)('<h1 id="sinope-th1123zb" tabindex="-1"><a class="header-anchor" href="#sinope-th1123zb" aria-hidden="true">#</a> Sinopé TH1123ZB</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>TH1123ZB</td></tr><tr><td>Vendor</td><td>Sinopé</td></tr><tr><td>Description</td><td>Zigbee line volt thermostat</td></tr><tr><td>Exposes</td><td>local_temperature, keypad_lockout, power, current, voltage, energy, climate (occupied_heating_setpoint, local_temperature, system_mode, running_state), backlight_auto_dim, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/TH1123ZB.jpg" alt="Sinopé TH1123ZB"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="setting-outdoor-temperature" tabindex="-1"><a class="header-anchor" href="#setting-outdoor-temperature" aria-hidden="true">#</a> Setting outdoor temperature</h3><p>To set <em>outdoor temperature</em>, you need to send the value to the following MQTT topic:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>zigbee2mqtt/&lt;FRIENDLY_NAME&gt;/set/thermostat_outdoor_temperature\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>If you want to automate the publishing of the outdoor temperature using Home Assistant, you may create an automation like this:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> <span class="token string">&#39;Auto_Publish_Outdoor_Temprature&#39;</span>\n  <span class="token key atrule">alias</span><span class="token punctuation">:</span> Auto_Publish_Outdoor_Temprature\n  <span class="token key atrule">description</span><span class="token punctuation">:</span> Automatically Publish the outdoor temperature to thermostats\n  <span class="token key atrule">trigger</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> <span class="token key atrule">entity_id</span><span class="token punctuation">:</span> sensor.outdoor_temprature_sensor\n    <span class="token key atrule">platform</span><span class="token punctuation">:</span> state\n  <span class="token key atrule">condition</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n  <span class="token key atrule">action</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> <span class="token key atrule">data</span><span class="token punctuation">:</span>\n      <span class="token key atrule">payload_template</span><span class="token punctuation">:</span> &#39;<span class="token punctuation">{</span><span class="token punctuation">{</span> states(&#39;&#39;sensor.outdoor_temprature_sensor&#39;&#39;) <span class="token punctuation">|</span> string <span class="token punctuation">}</span><span class="token punctuation">}</span>&#39;\n      <span class="token key atrule">topic</span><span class="token punctuation">:</span> zigbee2mqtt/&lt;FRIENDLY_NAME<span class="token punctuation">&gt;</span>/set/thermostat_outdoor_temperature\n    <span class="token key atrule">service</span><span class="token punctuation">:</span> mqtt.publish\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="enabling-time" tabindex="-1"><a class="header-anchor" href="#enabling-time" aria-hidden="true">#</a> Enabling time</h3><p>To enable <em>time</em> you need to send a <em>blank</em> message to the following MQTT topic:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>zigbee2mqtt/&lt;FRIENDLY_NAME&gt;/set/thermostat_time\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Every time the above message is sent, Zigbee2MQTT will calculate the current time and send it to the thermostat.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',13),s=(0,o.Uk)("How to use device type specific configuration"),i=(0,o.uE)('<ul><li><p><code>thermostat_unit</code>: Controls the temperature unit of the themrostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></p></li><li><p><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="local-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#local-temperature-numeric" aria-hidden="true">#</a> Local_temperature (numeric)</h3><p>Current temperature measured on the device. Value can be found in the published state on the <code>local_temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="keypad-lockout-enum" tabindex="-1"><a class="header-anchor" href="#keypad-lockout-enum" aria-hidden="true">#</a> Keypad_lockout (enum)</h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>keypad_lockout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;keypad_lockout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keypad_lockout&quot;: NEW_VALUE}</code>. The possible values are: <code>unlock</code>, <code>lock1</code>, <code>lock2</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric" aria-hidden="true">#</a> Current (numeric)</h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric" aria-hidden="true">#</a> Energy (numeric)</h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>running_state</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>7</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state&quot;: &quot;&quot;}</code>.</li></ul><h3 id="backlight-auto-dim-enum" tabindex="-1"><a class="header-anchor" href="#backlight-auto-dim-enum" aria-hidden="true">#</a> Backlight_auto_dim (enum)</h3><p>Control backlight dimming behavior. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;backlight_auto_dim&quot;: NEW_VALUE}</code>. The possible values are: <code>on demand</code>, <code>sensing</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',21),c={},d=(0,a(83744).Z)(c,[["render",function(e,t){const a=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[n,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[s])),_:1})])]),i],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,o]of t)e[a]=o;return e}}}]);