<div align="center">
  <img src="https://i.ibb.co/YdMp6Pp/ezgif-6-6b3e434000.gif" height="100"> &nbsp;
  <img src="https://see.fontimg.com/api/rf5/DYJX1/MTYyM2I1ZjcyYzQyNDgyNDk2ZTFkN2FjZTUwZjQzZGQub3Rm/V2ViIFN5c3RlbXMgYW5kIFRlY2hub2xvZ2llcw/gome-pixel.png?r=fs&h=98&w=1500&fg=000000&bg=FFFFFF&tb=1&s=65" height="45" >
  <h2>Laboratory Activities Repository</h2>
</div>

<details>
<summary><h2>📝 Contents</h2></summary>
  
- [Overview](#overview)
- [Laboratory 1](#lab1)
- [Laboratory 2](#lab2)
- [Laboratory 3](#lab3)
- [Laboratory 4](#lab4)
- [Student Portfolio](#portfolio)
- [Acknowledgement](#acknowledgement)



</details>

### <a name="overview"></a>
## 🐱 Overview

### <a name="lab1"></a>
## 📅 Laboratory 1 | Class Schedule

<div align="justify">
<b>Lesson(s): </b>HTML Tables, HTML Semantics<br><br> 
<b>Agenda: </b> Create an HTML file that contains sections for your class schedule visualized by an HTML table and a footer section that contains the list of courses (course code and description).<br><br>
<b>Relevant Syntax Utilized: </b><br><br>
<pre><code>&lt;table&gt;&lt;/table&gt;</code></pre>
<pre><code>&lt;th rowspan&gt;&lt;/th&gt;</code></pre>
<pre><code>&lt;td rowspan&gt;&lt;/td&gt;</code></pre>
<pre><code>&lt;th colspan&gt;&lt;/th&gt;</code></pre>
<pre><code>&lt;td colspan&gt;&lt;/td&gt;</code></pre>
<pre><code>&lt;footer&gt;&lt;/footer&gt;</code></pre>
  
<h3>Preview</h3>
<div align="center">
  <table>
    <tr>
      <td><img src="https://github.com/vinceclyde/BanaagVinceClydeCS3102_WSTactivities/blob/main/assets/Screenshot%202024-12-11%20150033.png"></td>
    </tr>
  </table>
</div>

<h3>Important Notes</h3>
• <b>&lt;th table&gt;</b> represents tabular data—that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.<br><br>
<pre><code>&lt;table&gt;
  <i>&lt;!-- Your table content here... --&gt;</i>
&lt;/table&gt;</code></pre>
• <b>&lt;th rowspan&gt;</b> specifies how many rows a table cell should span. Refer to the PHY 101 schedule on Tuesday and observe how it spans to three time periods.<br><br>
<pre><code>&lt;td rowspan="3"&gt;PHY 101&lt;/td&gt;</code></pre>
• <b>&lt;colspan&gt;</b> specifies how many columns a table cell should span. Refer to the lunch schedule in the image and observe how it spans to three days.<br><br>
<pre><code>&lt;td colspan="3"&gt;LUNCH&lt;/td&gt;</code></pre>
• <b>&lt;th footer&gt;</b> defines a footer for a document or section. In practical use, it typically contains authorship information, copyright information, contact information, sitemap, back-to-top links, and related documents.<br><br>
<pre><code>&lt;footer&gt;
  <i>&lt;! -- Your footer content here... --&gt;</i>
&lt;/footer&gt;</code></pre>

### <a name="lab2"></a>
## ✈️ Laboratory 2 | Vision Board

<b>Lesson(s): </b>CSS Flexbox<br><br> 
<b>Agenda: </b> Create an personalized vision board webpage using basic HTML and CSS Flexbox. The vision board will include images, inspirational quites, and goals, allowing students to visually represent their aspirations.<br><br>
<b>Relevant Syntax Utilized: </b><br>
<pre><code>display: flex;</code></pre>
<pre><code>flex-direction: row;</code></pre>
<pre><code>justify-content: center;</code></pre>
<pre><code>align-items: center;</code></pre>
<pre><code>.yourClassName {
  <i>/* Your styles here... */</i>
}
</code></pre>
<pre><code>&lt;div class = "yourClassName"&gt;
  <i>&lt;! -- Your content here... --&gt;</i>
&lt;/div&gt;</code></pre>
  
<h3>Preview</h3>
<div align="center">
  <table>
    <tr>
      <td><img src="https://github.com/vinceclyde/BanaagVinceClydeCS3102_WSTactivities/blob/main/assets/Screenshot%202024-12-12%20145431.png" width="400px"></td>
      <td><img src="https://github.com/vinceclyde/BanaagVinceClydeCS3102_WSTactivities/blob/main/assets/Screenshot%202024-12-12%20145438.png" width="400px"></td>
    </tr>
    <tr>
      <td><img src="https://github.com/vinceclyde/BanaagVinceClydeCS3102_WSTactivities/blob/main/assets/Screenshot%202024-12-12%20145456.png" width="400px"></td>
      <td><img src="https://github.com/vinceclyde/BanaagVinceClydeCS3102_WSTactivities/blob/main/assets/Screenshot%202024-12-12%20145514.png" width="400px"></td>
    </tr>
  </table>
</div>

<h3>Important Notes</h3>
• The <b>class = "yourClassName"</b> associates the <b>&lt;div&gt;</b> element with the <b>.yourClassName</b> style in the CSS.<br><br>
• <b>display: flex;</b> sets an element as a flex container, enabling the use of the Flexbox layout model for its child elements while <b>flex-direction: row;</b> arranges the flex items in a row (horizontally).<br><br>
• <b>justify-content: center;</b> aligns and centers flex items horizontally along the main axis (row is the default value) while <b>align-items: center;</b> aligns and centers flex items vertically along the cross-axis (column is the default value). Refer to the application icons in the bottom of the webpage and observe how the icons are displayed in a row, and are cleanly centered both horizontally and vertically inside the icon container.<br><br>
<pre><code>.app-container {
  <i>/* Styling for the app icons container... */</i> 
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items; center;
}
</code></pre>
<pre><code>&lt;div class="app-container"&gt;
  <i>&lt;!-- Your app icons here... --></i>
&lt;/div&gt;
</code></pre>

### <a name="lab3"></a>
## 🔢 Laboratory 3 | Word and Sentence Counter

### <a name="lab4"></a>
## 🍃 Laboratory 4 | Refined Exercise #2

### <a name="portfolio"></a>
## 📁 Portfolio

### <a name="acknowledgement"></a>
## 🩷 Acknowledgement
</div>



