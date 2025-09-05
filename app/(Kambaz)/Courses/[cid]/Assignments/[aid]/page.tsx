export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><h3>Assignment Name</h3></label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online. Submit a link to the landing page of your Web application
          running on Netlify. The landing page should include the following: Your full name and section,
          Links to each of the lab assignments, Link to the Kambaz application, Links to all relevant 
          source code repositories. The Kambaz application should include a link to navigate back to 
          the landing page.
      </textarea>
      <br/><br/>
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} />
          </td>
        </tr>
        <br/>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
            <option selected value="ASSIGNMENTS">
            ASSIGNMENTS
          </option>
          </select>
          </td>
        </tr>
        <br/>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
            <option selected value="PERCENTAGE">
            Percentage
          </option>
          </select>
          </td>
        </tr>
        <br/>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
            <option selected value="ONLINE">
            Online
          </option>
          </select>
          </td>
        </tr>
        <br/>
        <tr>
          <td></td>
          <td>
            <label>Online Entry Options</label><br/>
        <input type="checkbox" name="check-submission-type" id="wd-text-entry" />
        <label htmlFor="wd-text-entry">Text Entry</label> <br/>
        <input type="checkbox" name="check-submission-type" id="wd-website-url" />
        <label htmlFor="wd-website-url">Website URL</label><br/>
        <input type="checkbox" name="check-submission-type" id="wd-media-recordings" />
        <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
        <input type="checkbox" name="check-submission-type" id="wd-student-annotation" />
        <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
        <input type="checkbox" name="check-submission-type" id="wd-file-upload" />
        <label htmlFor="wd-file-upload">File Uploads</label><br/>
        <br />
          </td>
        </tr>
        <br/>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign To</label><br/>
            <input id="wd-assign-to" defaultValue="Everyone"/>
          </td>
        </tr>
        <br/>
        <tr>
          <td></td>
          <td>
            <label htmlFor="wd-due-date"> Due </label><br/>
        <input type="date" defaultValue="2024-05-13" id="wd-due-date" />
        <br />
          </td>
        </tr>
        <br/>
        <tr>
          <td></td>
          <td>
            <label htmlFor="wd-available-from"> Available from </label><br/>
        <input type="date" defaultValue="2024-05-06" id="wd-available-from" />
          </td>
          <td>
            <label htmlFor="wd-available-until"> Until </label><br/>
        <input type="date" defaultValue="2024-05-20" id="wd-available-until" />
          </td>
        </tr>
      </table>
      <hr />
      <div style={{textAlign:"right"}}>
      <button
          type="button"
          id="wd-btn-cancel"
        >Cancel</button>
<button
          type="button"
          id="wd-btn-save"
        >Save</button>
        </div>
        
    </div>
);}
