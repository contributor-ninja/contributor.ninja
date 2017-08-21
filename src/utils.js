const EmptyIssue = num => ({
  _id: num,
  title: 'empty',
  body: 'empty',
});

const EmptyColumn = num => ({
  id: num,
  issues: [
    EmptyIssue(0),
    EmptyIssue(1),
    EmptyIssue(2),
    EmptyIssue(3),
    EmptyIssue(4),
    EmptyIssue(5),
    EmptyIssue(6),
    EmptyIssue(7),
    EmptyIssue(8),
    EmptyIssue(9),
    EmptyIssue(10),
  ],
  language: {
    name: ['loading'],
  },
});

export function makeEmptyState() {
  return [EmptyColumn(0), EmptyColumn(1), EmptyColumn(2)];
}
