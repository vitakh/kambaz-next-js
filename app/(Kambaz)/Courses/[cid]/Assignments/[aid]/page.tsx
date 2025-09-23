"use client";

import { Button, Form, Table } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      
      <Form.Group className="mb-3 ms-5" controlId="wd-name">
        <Form.Label>Assignment Name</Form.Label>
        <Form.Control defaultValue="A1" />
      </Form.Group>

      <Form.Group className="mb-4 ms-5" controlId="wd-description">
        <Form.Control
          as="textarea"
          rows={3}
          defaultValue="The assignment is available online. Submit a link to the landing page of your Web application
          running on Netlify. The landing page should include the following: Your full name and section,
          Links to each of the lab assignments, Link to the Kambaz application, Links to all relevant 
          source code repositories. The Kambaz application should include a link to navigate back to 
          the landing page."
        />
      </Form.Group>

  
      <Table>
        <tr>
          <td align="right" valign="top">
            <Form.Label htmlFor="wd-points">Points</Form.Label>
          </td>
          <td>
            <Form.Control id="wd-points" type="number" defaultValue={100} className="mb-4"/>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
          </td>
          <td>
            <Form.Select id="wd-group" className="mb-4">
              <option selected value="ASSIGNMENTS">
                ASSIGNMENTS
              </option>
            </Form.Select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <Form.Label htmlFor="wd-display-grade-as">
              Display Grade as
            </Form.Label>
          </td>
          <td>
            <Form.Select id="wd-display-grade-as" className="mb-4">
              <option selected value="PERCENTAGE">
                Percentage
              </option>
            </Form.Select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <Form.Label htmlFor="wd-submission-type">
              Submission Type
            </Form.Label>
          </td>
          <td className="border">
           <Table>
            <tr>
              <td>
              <Form.Select className="m-3 ms-2 w-75"id="wd-submission-type">
                <option selected value="ONLINE">
                  Online
                </option>
              </Form.Select>
              </td>
              </tr>
              <tr>
              <td>
                <Form.Group>
                <Form.Label className="ms-2">
                  <b>Online Entry Options</b>
                </Form.Label>
                <br />
                <Form.Check className="m-3 ms-2" id="wd-text-entry" label="Text Entry" />
                <Form.Check
                className="m-3 ms-2"
                  id="wd-website-url"
                  defaultChecked
                  label="Website URL"
                />
                <Form.Check className="m-3 ms-2" id="wd-media-recordings" label="Media Recordings" />
                <Form.Check
                className="m-3 ms-2"
                  id="wd-student-annotation"
                  label="Student Annotation"
                />
                <Form.Check className="m-3 ms-2" id="wd-file-upload" label="File Uploads" />
                </Form.Group>
              </td>
              </tr>
            </Table>
          </td>
        </tr>

        <br />

        <tr>
          <td align="right" valign="top">
            <Form.Label htmlFor="wd-assign-to">Assign</Form.Label>
          </td>
          <td className="border border-rounded">
            <Form.Group controlId="wd-assign-to" className="ms-2 mb-2">
              <Form.Label>
                <b>Assign To</b>
              </Form.Label>
              <Form.Control defaultValue="Everyone" />
            </Form.Group>
            <Form.Group controlId="wd-due-date" className="ms-2 mb-2">
              <Form.Label>
                <b>Due</b>
              </Form.Label>
              <Form.Control type="date" defaultValue="2024-05-13" />
            </Form.Group>

            <Table>
              <tr>
                <td>
                  <Form.Group controlId="wd-available-from">
                    <Form.Label className="ms-2 mb-2">
                      <b>Available from</b>
                    </Form.Label>
                    <Form.Control className="ms-2" type="date" defaultValue="2024-05-06" />
                  </Form.Group>
                </td>
                <td>
                  <Form.Group controlId="wd-available-until">
                    <Form.Label className="mb-2">
                      <b>Until</b>
                    </Form.Label>
                    <Form.Control type="date" defaultValue="2024-05-20" />
                  </Form.Group>
                </td>
              </tr>
            </Table>
          </td>
        </tr>
      </Table>
      <hr />
      <div className="d-flex float-end">
        <Button variant="secondary" type="reset" id="wd-btn-cancel">
          Cancel
        </Button>
        <Button variant="danger" type="submit" id="wd-btn-save">
          Save
        </Button>
      </div>
    </div>
  );
}
