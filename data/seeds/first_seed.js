/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('tasks').truncate();
  await knex('resources').truncate();
  await knex('projects').truncate();

  // Insert project data and retrieve the inserted ID
  await knex('projects').insert(
    {
      project_name: 'GCUF Website',
      project_description: 'It must match the requirements',
      project_completed: true,
    } // Request the ID of the inserted row (works in PostgreSQL, SQLite3, and others)
  );

  // Insert resource data
  await knex('resources').insert({
    resource_name: 'Next JS',
    resource_description: 'It is open source and free Stuff',
  });

  // Insert task data using the project ID
  await knex('tasks').insert({
    task_description: 'First I have to build the UI Design',
    task_notes: 'Must Use the Figma',
    task_completed: false,
    project_id:1, 
  });
};
