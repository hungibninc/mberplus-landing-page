# lib/capistrano/tasks/react.rake
namespace :react do
  desc 'YARN BUILD'
    task :build do
      on roles(:app) do
        execute "sh -c \"cd #{release_path} && #{fetch(:build_command)}\""
      end
  end
end