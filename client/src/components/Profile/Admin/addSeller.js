import React from "react";
import CRUDTable, {
  Fields,
  Field,
  CreateForm,
  UpdateForm,
  DeleteForm
} from "react-crud-table";

import "./addSeller.css";

const DescriptionRenderer = ({ field }) => <textarea {...field} />;

let Homes = [
  {
    id: 1,
    title: "Home 1",
    description: "Home Desc sakjdhaiosdjaolijdmamdlnasklda"
  },
  {
    id: 2,
    title: "Home 2",
    description: "Home Desc2 dasjodajmodma;mwdnanlmldamldmal"
  }
];

const SORTERS = {
  NUMBER_ASCENDING: mapper => (a, b) => mapper(a) - mapper(b),
  NUMBER_DESCENDING: mapper => (a, b) => mapper(b) - mapper(a),
  STRING_ASCENDING: mapper => (a, b) => mapper(a).localeCompare(mapper(b)),
  STRING_DESCENDING: mapper => (a, b) => mapper(b).localeCompare(mapper(a))
};

const getSorter = data => {
  const mapper = x => x[data.field];
  let sorter = SORTERS.STRING_ASCENDING(mapper);

  if (data.field === "id") {
    sorter =
      data.direction === "ascending"
        ? SORTERS.NUMBER_ASCENDING(mapper)
        : SORTERS.NUMBER_DESCENDING(mapper);
  } else {
    sorter =
      data.direction === "ascending"
        ? SORTERS.STRING_ASCENDING(mapper)
        : SORTERS.STRING_DESCENDING(mapper);
  }

  return sorter;
};

let count = Homes.length;
const service = {
  fetchItems: payload => {
    let result = Array.from(Homes);
    result = result.sort(getSorter(payload.sort));
    return Promise.resolve(result);
  },
  create: Home => {
    count += 1;
    Homes.push({
      ...Home,
      id: count
    });
    return Promise.resolve(Home);
  },
  update: data => {
    const Home = Homes.find(t => t.id === data.id);
    Home.title = data.title;
    Home.description = data.description;
    return Promise.resolve(Home);
  },
  delete: data => {
    const Home = Homes.find(t => t.id === data.id);
    Homes = Homes.filter(t => t.id !== Home.id);
    return Promise.resolve(Home);
  }
};

const styles = {
  container: { margin: "auto", width: "fit-content" }
};

const addSeller = () => (
  <div style={styles.container}>
    <CRUDTable
      caption="Homes"
      fetchItems={payload => service.fetchItems(payload)}
    >
      <Fields>
        <Field name="id" label="Id" hideInCreateForm />
        <Field name="title" label="Title" placeholder="Title" />
        <Field
          name="description"
          label="Description"
          render={DescriptionRenderer}
        />
      </Fields>
      <CreateForm
        title="Home Creation"
        message="Create a new Home!"
        trigger="Create Home"
        onSubmit={Home => service.create(Home)}
        submitText="Create"
        validate={values => {
          const errors = {};
          if (!values.title) {
            errors.title = "Please, provide Home's title";
          }

          if (!values.description) {
            errors.description = "Please, provide Home's description";
          }

          return errors;
        }}
      />

      <UpdateForm
        title="Home Update Process"
        message="Update Home"
        trigger="Update"
        onSubmit={Home => service.update(Home)}
        submitText="Update"
        validate={values => {
          const errors = {};

          if (!values.id) {
            errors.id = "Please, provide id";
          }

          if (!values.title) {
            errors.title = "Please, provide Home's title";
          }

          if (!values.description) {
            errors.description = "Please, provide Home's description";
          }

          return errors;
        }}
      />

      <DeleteForm
        title="Home Delete Process"
        message="Are you sure you want to delete the Home?"
        trigger="Delete"
        onSubmit={Home => service.delete(Home)}
        submitText="Delete"
        validate={values => {
          const errors = {};
          if (!values.id) {
            errors.id = "Please, provide id";
          }
          return errors;
        }}
      />
    </CRUDTable>
  </div>
);

export default addSeller;