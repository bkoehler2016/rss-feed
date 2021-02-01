import React from 'react';
import './Form.css'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const RssForm = (props) => {
  return (
    <Form className="rssFeed">
     
      <FormGroup>
        <Label for="rssUrl">Rss Feed Url</Label>
        <Input
          type="url"
          name="url"
          id="rssUrl"
          placeholder="url"
        />
      </FormGroup>

      <Button color="primary">Add RSS</Button>{' '}
    </Form>
    
  );
}

export default RssForm;