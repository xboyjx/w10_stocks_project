# Stock Tracker App

<h2><a href="">Link to working site</a></h2>

<h2>About</h2>
<p>This was a 6-day group project completed during week 10 of the CodeClan course by Jacob, Christian and Jacob.</p>

<h2>Tools</h2>
<ul>
  <li>Node.js</li>
  <li>MongoDB</li>
  <li>Express</li>
  <li>React</li>
  <li>External APIs</li>
  <li>Git</li>
 </ul>


 
<h2>Project Brief</h2>
<p>A local trader has come to you with a portfolio of shares. She wants to be able to analyse it more effectively. She has a small sample data set to give you and would like you to build a Minimum Viable Product that uses the data to display her portfolio so that she can make better decisions.</p>

<h4>MVP</h4>
  <ul>
    <li>A user should be able to:
      <ul>
        <li>View total current value. </li>
        <li>View individual trends.</li>
        <li>Retrieve a list of share prices from an external API and allow the user to add shares to her portfolio. </li>
        <li>View a chart of the current values in her portfolio.</li>
        <li>Filter by time interval.</li>
      </ul>
    </li>
   </ul>

<h4>Possible Extensions</h4>
  <ul>
  <li>A user can remove shares from her portfolio </li>
  <li>Stock predictions/ trend speculation</li>
  <li>Authentication/ login</li>
  </ul>


 <h4>Planning</h4>
  <p>The below images demonstrate some of my planning for the MVP stage of the project.  I made use of: Class and Object Diagrams, Wireframes, a Db Table Diagram, a MSCW board and a useCase Diagram.
 
 




  
 <table>
   <tr>
    <td>
      <img width="1011" alt="Screenshot 2022-05-08 at 11 23 15" src="https://user-images.githubusercontent.com/88304522/167291915-f408c437-1b53-4e43-987d-df69be782ae7.png">
    </td>
    <td>
        <img width="1011" alt="P3-1  Project Planning - Trelo" src="https://user-images.githubusercontent.com/88304522/167291804-6b9ddce3-e88b-4871-bbcf-8b6a028891f9.png">
    </td>
   </tr>
    
   <tr>
    <td>
        <img width="1011" alt="P3-3  Project Planning - Node Tree" src="https://user-images.githubusercontent.com/88304522/167291815-9627a71b-0f31-40ba-a4c3-2d7cb2c2a887.png">
    </td>
    <td>
       <img width="1011" alt="P12b-1 planning Inforamtion - Wireframe early" src="https://user-images.githubusercontent.com/88304522/167291819-caa32230-7f3e-4447-afd0-80a297c3a0e4.png">
    </td>
   </tr>
  </table>
  
  <h2>Screenshots</h2>
  
  <table>
   <tr>
    <td>
      <img width="1280" alt="StockTracker_1" src="https://user-images.githubusercontent.com/88304522/167291966-422117b0-c7f1-4771-bf61-391b430d878a.png">
    </td>
    <td>
        <img width="1280" alt="StockTracker_2" src="https://user-images.githubusercontent.com/88304522/167291970-87a0ba87-8228-4610-a476-661eddb17ecb.png">
    </td>
   </tr>
    
   <tr>
    <td>
        <img width="1280" alt="StockTracker_3" src="https://user-images.githubusercontent.com/88304522/167291973-c8821aa3-fd2c-4c39-bbe0-38d9222c735a.png">
    </td>
    <td>
       <img width="1280" alt="StockTracker_4" src="https://user-images.githubusercontent.com/88304522/167291978-b26272c6-06bc-47c9-ad23-bfe7a925f635.png">
    </td>
   </tr>
  </table>

<h2>How to Run</h2>
<ul>
  <li>Fork the repository and then clone it clone to local computer</li>
  <li>cd server</li>
  <li>npm install</li>
  <li>Get mongod up and running.  The following terminal commands work for me if you're not sure how:
    <ul>
      <li>sudo mkdir -p /System/Volumes/Data/data/db</li>
      <li>sudo chown -R `id -un` /System/Volumes/Data/data/db</li>
      <li>--dbpath /System/Volumes/Data/data/db</li>
    </ul>
  <li>npm run seeds</li>
  <li>(in a new tab) npm run server:dev</li>
      
  <li>(in a new tab) cd ../client</li>
  <li>npm install</li>
      <li>npm start</li>
 </ul>
 
 <h2>What we learned</h2>
<ul>
  <li>Git - this was the first time working on a project in a team, and we’d just been introduced to using different branches and merging.  It wasn’t without its issues, but overall we made effective use of branches and pull requests while working independently on components and features.</li>
  <li>Pick APIs Carefully - we rushed into choosing the API but it would be beneficial to carefully consider the desired functions of the app and whether the API will supply the data we need in the way we need.</li>
  <li>Always make sure your useEffect isn’t going to go rogue - forgetting the square brackets results in about 30,000 fetch requests in less than a minute.  Good job the API had a limit of 8 requests per minute!</li>
  <li>Take time, don’t let code runaway - Due to the short timeframe for the project, we prioritised working code over clear and DRY code, meaning it’s hard work to navigate the code as it currently stands. </li>
  <li>Charts - This is here as an example of having something we don’t know anything about, in this case the highcharts library, getting stuck in and being able to use it effectively.  Simple, but no doubt this will be a vital tool in our learning moving forward.</li>
 </ul>

 <h2>What we would do differently</h2>
<ul>
  <li>We still haven’t managed to get the delete stock function to render the updated list to the page without crashing the page.</li>
  <li>More data for the user - the app is currently very limited in terms of analytical tools.</li>
  <li>Setting up the login page to allow for different users.</li>
</ul>
 
