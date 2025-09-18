{ pkgs, ... }:
{
  # The Nix packages to make available in your workspace.
  packages = [ pkgs.nodejs_20 ];

  # The VS Code extensions to make available in your workspace.
  idx = {
    extensions = [ "dbaeumer.vscode-eslint" ];

    # Workspace lifecycle hooks.
    workspace = {

      # Runs when a workspace is first created.
      onCreate = {
        npm-install = "npm install";
      };

      # Runs every time the workspace is (re)started.
      onStart = {
        # vitepress-server = "npm run docs:dev";
      };
    };

    # Web-based previews.
    previews = {
      enable = true;
      previews = {
        web = {
          command = [ "npm" "run" "docs:dev" "--" "--port" "$PORT" "--host" "0.0.0.0" ];
          manager = "web";
        };
      };
    };
  };
}